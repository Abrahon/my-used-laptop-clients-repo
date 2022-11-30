import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const [deletingLaptop, setDeletingLaptop] = useState(null);

    const closeModal = () =>{
        setDeletingLaptop(null);
    }


    const { data: laptops, isLoading, refetch } = useQuery({
        queryKey: ['laptops'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/laptops', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;

            }
            catch (error) {

            }
        }
    });
    
    const handleDeleteLaptop = laptop =>{
        fetch(`http://localhost:5000/laptops/${laptop._id}`, {
         method: 'DELETE',
         headers: {
             authorization: `bearer ${localStorage.getItem('accessToken')}`
         }
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deleteCount > 0){
                refetch();
                toast.success(`Laptop ${laptop.name}deleted successfully`)
            }
         
        
        })
     }
 
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl mb-5'>My Products: {laptops?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>image</th>
                            <th>productName</th>
                            <th>Price</th>
                            <th>Phone</th>
                            <th>Location</th>
                            <th>purses of years</th>
                            <th>productCondition</th>                            
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {  laptops &&
                            laptops.map((laptop, i) => <tr key={laptop._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={laptop.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{laptop.name}</td>
                                <td>{laptop.price}</td>
                                <td>{laptop.phone}</td>
                                <td>{laptop.location}</td>
                                <td>{laptop.pursesYear}</td>
                                
                                <td>{laptop.productCondition}</td>
                                
                                <td>
                                    <label onClick={() => setDeletingLaptop(laptop)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>

                                   </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                deletingLaptop && <ConfirmationModal
                title={`Are you sure you want to delete this item`}
                message={`if you delete ${deletingLaptop.name} it can be undone`}
                successAction = {handleDeleteLaptop}
                successButtonName = "Delete"
                modalData = {deletingLaptop}
                closeModal={closeModal}
                >
                 

                </ConfirmationModal>
            }


        </div>
    );
};

export default MyOrders;