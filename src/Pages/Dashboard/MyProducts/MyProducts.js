import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    
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
            <h2 className='text-3xl mb-5'>My Orders</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>SL-No</th>
        <th>Name</th>
        <th>email</th>
        <th>Phone</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
    
     {
         bookings &&
        bookings?.map((booking, i)=> <tr key ={booking._id}>
        <th>{i+1}</th>
        <td>{booking.name}</td>
        <td>{booking.email}</td>
        <td>{booking.phone}</td>
        <td>{booking.location}</td>
      </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProducts;