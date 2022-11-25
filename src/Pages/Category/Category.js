import React, { useState } from 'react';
import CategoryDetails from './CategoryDetails';


const Category = () => {
    const [category, setCategorys] = useState([]);


  

    return (
      <div>
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
            category.map(cat =><CategoryDetails
            key={cat._id}
            cat={cat}
            ></CategoryDetails>)
        }
        </div>
       


      </div>
    );
};

export default Category;