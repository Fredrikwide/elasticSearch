//react
import { createContext, useContext, useState, useEffect } from "react";
//api
import { getProductsFromElastic } from "../Api/getProducts";
//types
import { IElasticHit, ISimpleProduct } from "../Interfaces/Types";
//utils
import { createElasticProduct, createSimpleProduct } from "../utils/createProductItem";

//create context
export const ElasticContext = createContext<any>(null);

//create context hook
export const useElastic = () => useContext(ElasticContext);

//create context provider
export const ElasticProvider = (props: any) => {

  //global state
  const [useMatchWord, setUseMatchWord] = useState<boolean>(false);
  const [products, setProducts] = useState<ISimpleProduct[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [error, setError] = useState<any | null>(null);
  const [filter, setFilter] = useState<boolean>(false);

  const filterProductNamesBySearchTerm = (products: ISimpleProduct[], searchTerm: string) => { 
    return products.filter((product: ISimpleProduct) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
  }

  useEffect(() => {
      (async (): Promise<void> => { 
        try {
          const { hits: { hits }} = await getProductsFromElastic(searchTerm, useMatchWord);
          if(hits.length > 0) {
            hits.forEach(({_source }: IElasticHit) => {
              setProducts((prev: ISimpleProduct[]) => [...prev, createSimpleProduct(createElasticProduct(_source))].filter((product: ISimpleProduct, index: number, self: ISimpleProduct[]) => index === self.findIndex((p: ISimpleProduct) => p.name === product.name)).reverse());
            });  
          }             
        } catch (error) {
          setError(error);
        }
      })();
  }, [searchTerm, useMatchWord]);

  useEffect(() => {
  }, [products]);

  useEffect(() => {
  }, [useMatchWord]);

  useEffect(() => { 
    setProducts((prevProducts) => filterProductNamesBySearchTerm(prevProducts, searchTerm).reverse());
  }, [filter, searchTerm]);
  
  
  const ElasticContextValue = {
    useMatchWord,
    setUseMatchWord,
    searchTerm,
    setSearchTerm,
    products,
    setProducts,
    error,
    setFilter,
    filter
  }

  return (
      <ElasticContext.Provider value={ElasticContextValue}>
          {props.children}
      </ElasticContext.Provider>
  )
}