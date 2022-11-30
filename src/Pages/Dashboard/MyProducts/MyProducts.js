import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    console.log(url)
    
    const {data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async ()=>{
            const res = await fetch(url,{
              headers:{
                authorization: `bearer ${localStorage.getItem('accessToken')}`

              }
            });
            
            const data = await res.json();
            return data;
        }
    })
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>SL-No</th>
        <th>image</th>
        <th>title</th>
        <th>location</th>
        <th>Phone</th>
        <th>payment</th>
      </tr>
    </thead>
    <tbody>
    
     {
          bookings &&
        bookings.map((booking, i) => <tr key={booking._id}>
        <th>{i + 1}</th>
        <td><div className="avatar">
            <div className="w-24 rounded-full">
                <img src={booking.img} alt="" />
            </div>
        </div></td>
        <td>{booking.title}</td>
        <td>{booking.price}</td>
        <td>{booking.phone}</td>
        <td>{booking.pay}</td>
        {/* <td>{booking.payment}</td> */}
        {
          booking.price && !booking.paid && <button
           className='btn btn-primary'
           Pay
           ></button>
        }
        {
          booking.price && booking.paid && <span className='text-primary'>paid</span>
        }
      </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProducts;