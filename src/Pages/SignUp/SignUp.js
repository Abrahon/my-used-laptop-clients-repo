import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const {register,handleSubmit,formState: {errors}} = useForm();

     const {createUser, updateUser, signInWithGoogle} = useContext(AuthContext);
     const [signUpError, setSignUpError] = useState('')
   

    const handleSignUp = (data)=>{
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast('user created successfully.')
            // Navigate('/')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{})
            .catch(err=> console.log(err));
        })
        .catch(error=>{
            console.log(error);
            setSignUpError(error.message)
        })
        
    }
    const handleGoogleSignIn =()=>{
        signInWithGoogle()
        .then(result=>{
            const user = result.user;
            console.log(user)
            toast('user created successfully by google.')

        })
        .catch(error=>{
            console.log(error);
        })

    }
  

    return (
        <div className='h-[800px] flex justify-center items-center drop-shadow-2xl'>
            
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>Register</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                     <div className="form-control w-full max-w-xs">
                        <label className="label"> 
                        <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name",{
                            required:"Name is required"
                        })} 
                        className="input input-bordered w-full max-w-xs"/>
                          {errors.name && <p className='text-red-500'>{errors.name.message}</p>} 
                    </div>

                     <div className="form-control w-full max-w-xs">
                        <label className="label"> 
                        <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email",{
                            required:"Email is required"

                        })} 
                        className="input input-bordered w-full max-w-xs"/>
                          {errors.email && <p className='text-red-500'>{errors.email.message}</p>} 
                    </div>

                     <div className="form-control w-full max-w-xs">
                        <label className="label"> 
                        <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",{
                            required:"Password is required",
                            minLength:{value: 6, message: "password must be 6 characters"}
                        })} 
                        
                          className="input input-bordered w-full max-w-xs mb-5"/>
                          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    </div>
                   
                    <input className='btn btn-accent w-full' value="signup" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account<Link className='text-secondary' to="/login">Please login</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>Continue with google</button>
            </div>
          </div>
    );
};

export default SignUp;