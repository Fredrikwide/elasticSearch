import { IElasticSource, IProduct, ISimpleProduct } from "../Interfaces/Types";

export const createElasticProduct = ({
  id,
  product,
  price,
  priceInfo,
  description,
  store,
}: IElasticSource): IProduct => {
  const productResult: IProduct = { 
    id,
    product,
    price,
    priceInfo,
    description,
    store,
  };

  return productResult as IProduct;
 }

 export const createSimpleProduct = ({ product, price }: IProduct): ISimpleProduct => {

  const checkIsNullorempty = (value: string | undefined): string => { 
    return value ? value : '';
  }

  const simpleProduct: any = { 
    id: product.id || 0,
    name: product.name,
    image: product.media.product_images.first ? product.media.product_images.first[280] : '',
    originalPrice: checkIsNullorempty(price.display.previousPrice),
    currentPrice: checkIsNullorempty(price.display.offer),
    discount: price.diff_percentage || 0,
  };
  
  return simpleProduct as ISimpleProduct;
 }
