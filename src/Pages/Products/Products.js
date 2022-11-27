import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className='mb-4'>
           
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product =><ProductCard
                    key={product._id}
                    product={product}
                    ></ProductCard>)
                    
                }
            </div>
        </div>
    );
};

export default Products;