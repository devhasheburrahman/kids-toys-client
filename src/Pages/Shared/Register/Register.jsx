import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Provaider/AuthProvider';

const Login = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleRegister = event => {
        event.preventDefault();
        setError('');
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const password = form.password.value
        console.log(name, email, password, photo);
        createUser(email, password)
            .then(result => {
                const createUser = result.user;
                console.log(createUser);
                event.target.reset();
                navigate(from, { replace: true })
                setSuccess('SuccessFully Register')
            })
            .catch(error => {
                setError(error.message)
            })


    }
    return (
        <div className="w-3/4 mx-auto text-center min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">

                <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister}>
                        <div className="card-body">
                            <h1 className="text-3xl font-bold"> Register Now!!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder=" Photo Url" required className="input input-bordered" />
                            </div>
                            <p className='text-red-500'> {error}</p>
                            <p className='text-success'> {success}</p>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Register" />
                            </div>
                        </div>
                    </form>
                    <p className='my-4 text-center'>Already have an account? Please<Link className='text-primary font-bold' to='/login'>Register</Link></p>
                </div>
            </div>
        </div>

    );
};

export default Login;