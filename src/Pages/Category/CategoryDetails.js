
import { useLoaderData } from 'react-router-dom';



const CategoryDetails = ({product,setProduct}) => {
    console.log(product)

    const {id, img, name, sellerName, resalePrice, originalPrice, use, posted} = product;
    const category =useLoaderData();


    return (
        <div>
        <div className="card w-96 bg-base-100 shadow-2xl">
            <figure className="px-3 pt-3">
                <img src={img} alt="Shoes" className="rounded-xl"/>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"> {name}</h2>
                {/* <FontAwesomeIcon icon="fa-thin fa-check" /> */}
                <h4 className="card-title">Seller Name: {sellerName}</h4> 
                 <p><span>Resale Price : ${resalePrice}</span></p>
                <p><span>Original Price : ${originalPrice}</span></p>
                <p><span>Uses : {use}</span></p>
                <p><span>Post : {posted}</span></p>
                <div className="card-actions justify-center">
                    <label htmlFor="booking-modal"
                     className="btn btn btn-primary"
                     onClick={()=>setProduct(product)}
                     >Book Now</label>

                </div>
            </div>
        </div>
    </div>
    );
};

export default CategoryDetails;