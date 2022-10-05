import { ReactElement } from "react";
import { ISimpleProduct } from "../../Interfaces/Types";
import "./Card.css";



export const Card= (currentProduct: ISimpleProduct): ReactElement => {
  return (
    <>
      { currentProduct && (
        <div className='product-card-wrapper' key={currentProduct.id}>
          <h1 className='product-title'>
            {currentProduct.name}
          </h1>
          <div className="product-image-wrapper">
            <img 
              className='product-image' 
              src={currentProduct.image} 
              alt={currentProduct.name} 
            />
          </div>
          <div className="product-body-wrapper">
            <div className="product-price-wrapper">
              <p className='product-price original'>
                Price: {currentProduct.originalPrice}
              </p>
              <p className='product-price offer'>
                Price: {currentProduct.currentPrice}
              </p>
              <span className="product-price-discount">
                ~{Number(Math.ceil(currentProduct.discount))}% off
              </span>
            </div>
          </div>

          <button className='product-button'>
            Add to cart
          </button>
        </div>
      )}
    </>
  );
};