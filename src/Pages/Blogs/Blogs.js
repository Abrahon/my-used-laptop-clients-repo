import React from 'react';

const Blogs = () => {
    return (
        <div className=' mx-auto p-5'>
            <h1  className='text-2xl mb-5 font-bold text-warning'>1. What are the different ways to manage a state in a React application?</h1>
            <p className='text-xl mb-5'>There are four main types of state you need to properly manage in your React apps:<br />
                <strong>
                    1.Local state.<br />
                    2.Global state<br />
                    3.Server state<br />
                    4.URL state
                </strong>
            </p>
            <h1 className='text-2xl mb-5 font-bold text-warning'>2. How does prototypical inheritance work?</h1>
            <p className='text-xl mb-5'>Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.</p>

            
        </div>
    );
};

export default Blogs;