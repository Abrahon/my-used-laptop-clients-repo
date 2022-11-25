import React from 'react';

const Information = () => {
    return (
        <div className="h-[1000px] flex justify-center items-center drop-shadow-2xl">
            <div className="w-full hero-content flex-col lg:flex-row-reverse">
                {/* <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div> */}
                <div className="w-96 p-7">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your country</span>
                            </label>
                            <input type="text" placeholder="country" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="text" placeholder="phone" className="input input-bordered" />
                          
                        </div>
                        <div className='mt-6'>
                        <textarea className="textarea textarea-primary" placeholder="write your text"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;