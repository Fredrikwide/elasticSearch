import { useElastic } from '../../Context/ElasticContext';
import { ISimpleProduct } from '../../Interfaces/Types';
import { Card } from '../Card/Card';
import './Grid.css';

export const Grid = () => {
  const { products } = useElastic();
  return (
    <>
      <div className='product-grid'>
        {

          (products.length > 0 && products.map((product: ISimpleProduct, key: number) => (
            <div className='product-grid-item' key={key}>
              <Card {...product} />
            </div>
          ))) || <div className='product-grid-item'>No products found</div>
        }
      </div>
    </>
  )
};