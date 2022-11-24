import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const {register,handleSubmit,formState: {errors}} = useForm();
    // const {createUser, updateUser} = useContext(AuthContext)
    // const [signUpError, setSignUpError] = useState('');

    // const [createdUserEmail, setCreatedUserEmail] = useState('')

    // const [token] = useToken(createdUserEmail);
    // const navigate = useNavigate();

    // if(token){
    //     navigate('/');
    // }
  

    const handleSignUp = (data)=>{
        console.log(data);
        //  setSignUpError('');
        // createUser(data.email, data.password)
        // .then(result=>{
            // const user = result.user;
            // console.log(user);
            // toast('User Created Successfully.')
            const userInfo = {
                displayName:data.name
            }
            // updateUser(userInfo)

            .then(()=>{
                saveUser(data.name, data.email);
            })
            .catch(err=>console.log(err))
            
        // })
        // .catch(error=>{
        //     console.log(error)
        //     // signUpError(error.message);
        // });


    }
    

    const saveUser = (name,email)=>{
        const user = {name, email};
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     setCreatedUserEmail(email);

        // })
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
                        
                          className="input input-bordered w-full max-w-xs"/>
                          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                    </div>
                   
                 
                    <input className='btn btn-accent w-full' value="signup" type="submit" />
                    {/* {signUpError && <p className='text-red-600'>{signUpError}</p>} */}
                </form>
                <p>Already have an account<Link className='text-secondary' to="/login">Please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue with google</button>
            </div>
          </div>
    );
};

export default SignUp;