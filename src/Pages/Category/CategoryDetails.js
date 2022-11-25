import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryDetails = () => {

    // const {id, img, name, sellerName, resalePrice, originalPrice, use, posted} = products;
    // const category =useLoaderData();


    return (
        <div>
        <h1>This category rote</h1>
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src='' alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"></h2>
                {/* <h4 className="card-title">{sellerName}</h4> */}
                {/* <p><span>{resalePrice}</span></p>
                <p><span>{originalPrice}</span></p>
                <p><span>{use}</span></p>
                <p><span>{posted}</span></p> */}
                <div className="card-actions">
                    <button className="btn btn-primary">Book</button>

                </div>
            </div>
        </div>
    </div>
    );
};

export default CategoryDetails;