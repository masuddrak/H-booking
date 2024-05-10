import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import auth from "../firebase/firebase.config";
import { TiStarburst } from "react-icons/ti";
import { TiStarburstOutline } from "react-icons/ti";



const Header = () => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };
    // initially set the theme and "listen" for changes to apply them to the HTML tag
    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/rooms">Rooms</NavLink></li>
        <li><NavLink to="/mybooking">My Bookings</NavLink></li>
        <li><NavLink to="/addroom">Add Room</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>
    const { user, logoutUser, setLoader } = useContext(authContext)
    const logoutHandler = () => {
        logoutUser(auth)
        setLoader(false)
    }
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm gap-2 dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-20">
                            {navlinks}
                        </ul>
                    </div>
                    <Link className="text-xl font-extrabold">H-Booking</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-5 menu-horizontal px-1 z-20">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-3">
                    {/* themset */}
                    <label className="swap swap-rotate">
                        <input onClick={toggleTheme} type="checkbox" />
                        <div className="swap-on text-3xl"><TiStarburstOutline></TiStarburstOutline></div>
                        <div className="swap-off text-3xl"><TiStarburst></TiStarburst> </div>
                    </label>

                    {/* themset */}

                    {user ? <div className="z-20">

                        <div className="dropdown dropdown-end dropdown-hover">
                            <div tabIndex={0} className=" m-1"><img className="md:w-[30px] md:h-[30px] w-[20px] h-[20px] object-cover rounded-full" src={user?.photoURL}></img></div>
                            <ul tabIndex={0} className="dropdown-content z-[10]  menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>{user?.displayName}</a></li>
                                <li><button onClick={logoutHandler} className="btn bg-slate-500">Logout</button></li>
                            </ul>
                        </div>
                    </div> : <div className="flex gap-3 items-center">
                        <Link to="/login" className="">Login</Link>
                        <div className="border border-1 h-2"></div>
                        <Link to="/register" className="bn">Register</Link>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Header;