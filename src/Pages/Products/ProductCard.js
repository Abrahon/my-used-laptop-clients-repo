import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {id,img,title,originalPrice}=product

    const handleDetails = (event)=>{
        console.log(handleDetails);
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="Shoes" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">{originalPrice}</h2>
                    <div className="card-actions justify-end">
                        {/* <button onClick={handleDetails} className="btn btn-primary">View details</button> */}
                <Link className='text-center' to={`/category/:id`}><button className='bg-danger mb-3 text-align-center p-3 rounded'>view details</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;