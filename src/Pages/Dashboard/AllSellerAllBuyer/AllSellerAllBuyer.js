import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AllSellerAllBuyer = () => {
    // const[data,setData]=useState('')
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://used-laptop-products-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id =>{
        fetch(`https://used-laptop-products-server.vercel.app/users/admin/${id}`,{
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                toast.success('Make admin successful')
                refetch();
            }
        })
    }
    const deleteAdmin = id=>{ 
    //    setData(data.filter(item => item.id !== id));
    // console.log(deleteAdmin);
        
    };
    return (
        <div>
            <h2 className='text-3xl'>AllSeller and buyer</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users.map((user, i) => <tr key={user._id}>
                            <th>{i+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{ user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                            <td><button onClick={()=> deleteAdmin(user._id)} className='btn btn -sm btn-danger'>Delete</button></td>
                        </tr>)

                       }
                      
                    </tbody>
                   
                </table>
            </div>
        </div>
    );
};

export default AllSellerAllBuyer;