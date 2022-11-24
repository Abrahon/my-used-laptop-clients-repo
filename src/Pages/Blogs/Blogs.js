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
            <h1 className='text-2xl mb-5 font-bold text-warning'>4. React vs. Angular vs. Vue?</h1>
            <p className='text-xl mb-5'><strong> Angular:</strong>
                Angular has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.<br />
               <strong> React:</strong>
                React offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality.<br />
                <strong>Vue:</strong>
                Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
            </p>
        </div>
    );
};

export default Blogs;