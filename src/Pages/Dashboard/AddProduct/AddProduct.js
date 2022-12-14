import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_Key;
    console.log(imageHostKey)

    const navigate = useNavigate('/')

    const { data: qualities, isLoading } = useQuery({
      


        queryKey: ['qualities'],
        queryFn: async () => {
            const res = await fetch('https://used-laptop-products-server.vercel.app/productQuality');
            const data = await res.json();
            return data;
        }
    });

    const handleAddProduct = data => {
        console.log(data)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method:'POST',
            body:formData
        })

            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const laptop = {
                        productName: data.productName,
                        price: data.price,
                        phone: data.phone,
                        location: data.location,
                        pursesYear: data.pursesYear,
                        productCondition: data.productCondition,
                        image: imgData.data.url
                    }
                    console.log(laptop)

                    fetch('https://used-laptop-products-server.vercel.app/laptops', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(laptop)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            navigate('/dashboard/myorders')

                        })
                }
            })


    }

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div>
            <div className='w-96 p-7'>
                <h2 className='text-4xl'>Add A Product</h2>
                <form onSubmit={handleSubmit(handleAddProduct)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product name</span>
                        </label>
                        <input type="text" {...register("productName", {
                            required: "Name is required"
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.productName&& <p className='text-red-500'>{errors.productName.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" {...register("price", {
                            required: "price is required"
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.price && <p className='text-red-500'>{errors.price.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">phone</span>
                        </label>
                        <input type="phone" {...register("phone", {
                            required: "phone is required"

                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.phone && <p className='text-red-500'>{errors.phone.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input type="location" {...register("location", {
                            required: "location is required"

                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Year of purses</span>
                        </label>
                        <input type="purses years" {...register("pursesYear", {
                            required: "years is required"

                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.years && <p className='text-red-500'>{errors.years.message}</p>}
                    </div>
                    

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">product condition</span>

                        </label>

                        <select
                            {...register('product condition')}
                            className="select input-bordered w-full max-w-xs">
                                <option value="buyer">excellent</option>
                                <option value="seller">good</option>
                                <option value="seller">fair</option>


                                {
                                    qualities.map(quality => <option
                                        key={quality._id}
                                        quality={quality}
                                    >{quality.name}</option>)
                                }


                            </select>

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">product category</span>

                        </label>

                        <select
                            {...register('product condition')}
                            className="select input-bordered w-full max-w-xs">
                                <option value="buyer">Dell</option>
                                <option value="seller">Asus</option>
                                <option value="seller">Hp</option>


                                {
                                    qualities.map(quality => <option
                                        key={quality._id}
                                        quality={quality}
                                    >{quality.name}</option>)
                                }


                            </select>

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file" {...register("image", {
                            required: "Photo is required"
                        })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.img && <p className='text-red-500'>{errors.img.message}</p>}

                    </div>
                    <input className='btn btn-accent w-full mt-4' value="Add Product" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;