
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import CategoryDetails from './CategoryDetails';


const Category = () => {
  const products = useLoaderData();
  // const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

    

    return (
      <div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            products.categoryItem.map(product =><CategoryDetails
            key={product.id}
            product={product}
            setProduct = {setProduct}
            ></CategoryDetails>)
        }
        </div>
        {
          product && 
          <BookingModal
          setProduct = {setProduct}
          product = {product}
          ></BookingModal>
        }
      
       

      </div>
    );
};

export default Category;