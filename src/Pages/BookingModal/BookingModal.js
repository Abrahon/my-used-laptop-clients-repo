import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const BookingModal = ({product,setProduct,refetch}) => {
    const {brandName,originalPrice}=  product;
    const {user} = useContext(AuthContext);

    const handleBooking = event=> {
        event.preventDefault();
        const form = event.target;
       
        const name = form.name.value;
        // console.log(name);
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        form.reset()

        const booking = {
            name,
            email,
            phone,
            location,
        }
        console.log(booking)
        // setProduct(null)

        
        fetch('http://localhost:5000/bookings', {
           method: 'POST',
           headers: {
            'content-type': 'application/json'
           },
           body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data =>{
         console.log(data);
          
         if(data.acknowledged){
         setProduct(null);
         toast.success('That the item is booked')

         }
         else{
            toast.error('You have already booked');
         }
      

        })
    }
    
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold disabled:">{brandName}</h3>
                    <h3 className="text-lg font-bold disabled:">${originalPrice}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 top-5'>
                    {/* <input type="text" name='price' defaultValue={originalPrice} disabled placeholder="Price" className="input w-full input-bordered" /> */}
                    <input type="text" name='name' defaultValue={user?.displayName} disabled placeholder="User Name" className="input w-full input-bordered" />
                    <input type="email" name='email' defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                    <input type="text" name='phone' placeholder="Phone No" className="input w-full input-bordered" />
                    <input type="text" name='location' placeholder="Meeting Location" className="input w-full input-bordered" />
                    <br/>
                    <input className='bt btn-accent p-2 rounded w-full  text-2xl' type="submit" value ="Submit" />
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;