import React from 'react';

import Information from '../../Information/Information';
import Products from '../../Products/Products';

const Home = () => {
    return (
        <div>
            <div className="hero min-h- 1/2 mb-5 rounded" style={{ backgroundImage: `url("http://photos.demandstudios.com/getty/article/69/93/471295641.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <Products></Products>
            <Information></Information>



        </div>
    );
};

export default Home;