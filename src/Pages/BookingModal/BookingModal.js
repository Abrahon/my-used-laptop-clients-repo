import React from 'react';

const BookingModal = ({product,setProduct,refetch}) => {
    const {name,originalPrice}=  product;

    const handleBooking = event=> {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
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
        setProduct(null)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name} disabled</h3>


                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 top-5'>
                    <input type="text" defaultValue={originalPrice} disabled placeholder="User Name" className="input w-full input-bordered" />
                    <input type="text" placeholder="User Name" className="input w-full input-bordered" />
                    <input type="email" placeholder="Email Address" className="input w-full input-bordered" />
                    <input type="text" placeholder="Phone No" className="input w-full input-bordered" />
                    <input type="text" placeholder="Meeting Location" className="input w-full input-bordered" />
                    <br/>
                    <input className='bt btn-accent p-2 rounded w-full  text-2xl' type="submit" value ="Submit" />
                    </form>
                </div>
            </div>

        </>
    );
};

export default BookingModal;