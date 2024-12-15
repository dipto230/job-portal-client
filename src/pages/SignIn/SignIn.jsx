import React, { useContext } from 'react';
import Lottie from 'lottie-react';
import loginLottieData from '../../assets/loading/login.json';
import AuthContext from '../../context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate();
    console.log('in signIn page', location)
    const from = location.state || '/';
    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then((result) => {
                console.log("User signed in:", result.user);
                navigate(from);
            })
            .catch((error) => {
                console.error("Error signing in:", error);
            });
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-96">
                    <Lottie animationData={loginLottieData} />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="ml-7 mb-5 text-5xl font-bold">Sign In!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
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

