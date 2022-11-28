
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import Loading from '../Shared/Loading/Loading';
import CategoryDetails from './CategoryDetails';


const Category = () => {
  const products = useLoaderData();
  // const [products, setProducts] = useState([]);
  const [product, setProduct, isLoading] = useState(null);

  if(isLoading){
   return <Loading></Loading>
  }

    

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