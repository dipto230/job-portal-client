import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottieData from '../../assets/loading/Animation - 1734185792827.json'
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin from '../shared/SocialLogin';

const Register = () => {
  const{createUser} =useContext(AuthContext);
    const handleRegister = e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const number = form.number.value;
        const dateOfBirth = form.dateOfBirth.value;
        console.log(email,password, number, dateOfBirth );


        //password validation
        //show password validation error 
        createUser(email,password,number,dateOfBirth)
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.log(error.message)
        })


    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-96">
      
      <Lottie animationData={registerLottieData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <h1 className=" ml-7 mb-5 text-5xl font-bold">Register now!</h1>
      <form onSubmit={handleRegister} className="card-body">

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" required />
          
        </div>

        <div className="form-control">
  <label className="label">
    <span className="label-text">Date of Birth</span>
  </label>
  <input 
    name="dateOfBirth" 
    type="date" 
    className="input input-bordered" 
    required 
  />
</div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone Number</span>
          </label>
          <input name='number' type="number" placeholder="Pone Number" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>

      <div className="divider">OR</div>
      <div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;