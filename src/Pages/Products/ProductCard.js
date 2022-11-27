import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {_id,img,title,originalPrice} = product
    console.log(product);

    const handleDetails = (event)=>{
        console.log(handleDetails);
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={img} alt="" />
                    </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="card-actions justify-end">
                        <Link className='btn btn-primary' to={`/category/${_id}`}><button>View details</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;