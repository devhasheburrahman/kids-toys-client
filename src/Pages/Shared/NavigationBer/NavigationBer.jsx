import React, { useContext } from 'react';
import { AuthContext } from '../../../Provaider/AuthProvider';
import { Link, NavLink } from 'react-router-dom';



const NavigationBer = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
    }
    return (

        <div className="navbar md:px-10 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-primary p-2 rounded-lg " : ""
                            }
                        >
                            Home
                        </NavLink>
                        {
                            user &&
                            <NavLink
                                to="/alltoys"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "bg-primary p-2 rounded-lg " : ""
                                }
                            >
                                All Toys
                            </NavLink>
                        }
                        {
                            user &&
                            <NavLink
                                to="/mytoys"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending p-2" : isActive ? "bg-primary p-2 rounded-lg " : ""
                                }
                            >
                                My Toys
                            </NavLink>
                        }
                        {
                            user &&
                            <NavLink
                                to="/addtoys"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending p-2" : isActive ? "bg-primary p-2 rounded-lg " : ""
                                }
                            >
                                Add Toys
                            </NavLink>
                        }

                        <NavLink
                            to="/blog"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-primary p-2 rounded-lg " : ""
                            }
                        >
                            Blogs
                        </NavLink>

                    </ul>
                </div>
                <a className="text-2xl font-semibold">Kidz Toys</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal flex gap-5 px-4">
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-primary p-2 rounded-lg " : ""
                        }
                    >
                        Home
                    </NavLink>
                    {
                        user &&
                        <NavLink
                            to="/alltoys"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-primary p-2 rounded-lg " : ""
                            }
                        >
                            All Toys
                        </NavLink>
                    }
                    {
                        user &&
                        <NavLink
                            to="/mytoys"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-primary p-2 rounded-lg " : ""
                            }
                        >
                            My Toys
                        </NavLink>
                    }
                    {user &&
                        <NavLink
                            to="/addtoys"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "bg-primary p-2 rounded-lg " : ""
                            }
                        >
                            Add Toys
                        </NavLink>

                    }
                    <NavLink
                        to="/blog"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "bg-primary p-2 rounded-lg " : ""
                        }
                    >
                        Blogs
                    </NavLink>


                </ul>
            </div>
            <div className="navbar-end ">

                {user && <div >
                    {
                        user.photo ?

                            <img className='h-10' src={user.photoURL} title={user.displayName} alt="" roundedCircle /> :

                            <div className="avatar">
                                <div title={user.displayName} className=" mr-5 h-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>

                    }
                </div>
                }



                {user ?
                    <button className='btn btn-primary' onClick={handleLogOut}>Log Out </button>
                    :
                    <Link to="/login"><button className='btn btn-primary'>
                        Login
                    </button> </Link>

                }
            </div>
        </div >

    );
};

export default NavigationBer;


