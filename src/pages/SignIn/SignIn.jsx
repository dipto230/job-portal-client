import React from 'react';
import Lottie from 'lottie-react'; // Ensure this is installed using `npm install lottie-react`
import loginLottieData from '../../assets/loading/login.json'; // Replace with the correct path to your Lottie file

const SignIn = () => {
  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const number = form.number.value;
    const dateOfBirth = form.dateOfBirth.value;

    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Phone Number:', number);
    console.log('Date of Birth:', dateOfBirth);

    // Here you can implement your sign-in or form submission logic
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          {/* Lottie Animation */}
          <Lottie animationData={loginLottieData} />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-7 mb-5 text-5xl font-bold">Sign In!</h1>
          <form onSubmit={handleSignIn} className="card-body">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            {/* Date of Birth Field */}
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
            {/* Phone Number Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                name="number"
                type="number"
                placeholder="Phone Number"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
