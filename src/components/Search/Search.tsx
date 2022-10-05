import { ChangeEvent, useEffect } from "react";
import { useElastic } from "../../Context/ElasticContext";
import "./Search.css";

export const Search: React.FC = () => {
  const { 
    setSearchTerm,
    searchTerm,
    useMatchWord,
    setUseMatchWord,
    setProducts,
    products,
    setFilter,
    filter
  } = useElastic();
  
  // const [hideSearchResults, setHideSearchResults] = useState<boolean>(false);

  const HandleSearchClick = (): void => {
    if(searchTerm.length > 1) {
      setUseMatchWord(true);
      setSearchTerm(searchTerm);
      setFilter(!filter);
    }
  };

  const HandleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }
  const handleClearSearch = () => { 
    setSearchTerm('');
    setProducts([]);
  }

  useEffect(() => { 
  }, [searchTerm, products, useMatchWord]);
  

  return (
    <form onSubmit={HandleSearchClick}>
      <div className="product-search-wrapper">
        
        <input 
          className="product-search-input" 
          type="text" 
          placeholder="Search for products"
          id="search"
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => HandleSearchChange(e)}
        >
        </input>

        {/*
          started with an input dropdown suggestion but felt it would take a bit mroe time than i wanted to spend on this
          to make it good so i just left i uncommented for now with minimal styling effort :D
        */}

        {/* {
          !hideSearchResults && (
            <>
              <div className="product-search-suggestions">
                <ul className="product-search-suggestions-list">
                {
                  products.map((suggestion: ISimpleProduct, key: number) => (
                    <li className="product-search-suggestions-item" onClick={HandleSearchClick} key={key}>
                      <span className="product-search-suggestions-text">
                        {suggestion.name}
                      </span>
                    </li>
                  ))
                }
                </ul>
              </div>
            </>)
                  
          }*/}
     
        <div className="product-search-clear-button">
          <p className="product-search-clear-button-text" onClick={handleClearSearch}>
            clear
          </p>
        </div>
        <div className="product-search-button" onClick={HandleSearchClick}>
          <span className="product-search-button-text">
            Search
          </span>
        </div>
      </div>
    </form>
  )
};