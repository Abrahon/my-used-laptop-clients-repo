import React from 'react';


import Information from '../../Information/Information';
import Products from '../../Products/Products';

const Home = () => {
    return (
        <div>
            <div className="hero h- full mb-5 rounded" style={{ backgroundImage: `url("http://photos.demandstudios.com/getty/article/69/93/471295641.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Used Laptop, 2nd Hand Laptop - Price in Bangladesh 2022.</p>
                    </div>
                </div>
            </div>
            <Products></Products>
            <Information></Information>
           



        </div>
    );
};

export default Home;