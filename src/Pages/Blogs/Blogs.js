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

            <h1 className='text-2xl mb-5 font-bold text-warning'>3. What is a unit test? Why should we write unit tests?</h1>
            <p className='text-xl mb-5'>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.<br />
                For Test-Driven Development (TDD), you write unit tests before writing any implementation. This makes your implementation details in your code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written.
            </p>
           
        </div>
    );
};

export default Blogs;