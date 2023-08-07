import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../Provaider/AuthProvider';

const Login = () => {
    const [error, setError] = useState();
    const [success, setSuccess] = useState();

    const { signIn, handleGoogleSignIn, setUser } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if ((email, password)) {
            signIn(email, password)
                .then(result => {
                    const loggedUser = result.user;
                    event.target.reset();
                    navigate(from, { replace: true })
                    setSuccess('successfully log in!')

                })
                .catch((error) => setError(error.message));
        }


    };

    const handleGoogle = () => {
        handleGoogleSignIn()
            .then((result) => {
                console.log(result);
                const loggedUser = result.user;
                // setUser(loggedUser)
                navigate(from, { replace: true });
                setSuccess('successfully log in !')
            })
            .catch((error) => setError(error.message));
    }





    return (
        <div className="w-3/4 mx-auto text-center min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <h1 className="text-3xl font-bold">Please Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p className='text-red-500'>{error}</p>
                            <p className='text-primary'>{success}</p>


                        </div>
                    </form>
                    <p className='my-4 text-center'>Do not have an account? Please <Link className='text-primary font-bold' to='/register'>Register</Link></p>
                </div>
            </div>
            <button onClick={handleGoogle} className='btn btn-outline'><span><FaGoogle /></span>   Continue With Google</button>
        </div>

    );
};

export default Login;