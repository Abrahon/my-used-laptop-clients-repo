import React, { useState } from 'react';
import CategoryDetails from './CategoryDetails';


const Category = () => {
    // const [category, setCategorys] = useState([]);
    const [categories, setCategorise] = useState([]);


    return (
      <div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            categories.map(category =><CategoryDetails
            key={category._id}
            category={category}
            ></CategoryDetails>)
        }
        </div>
       

      </div>
    );
};

export default Category;