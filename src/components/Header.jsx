import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../Providers/AuthProvider";
import auth from "../firebase/firebase.config";




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
        {/* <li><NavLink to="/addroom">Add Room</NavLink></li> */}
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
                        <div tabIndex={0} role="button" className=" mr-2 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm gap-2 dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-20">
                            {navlinks}
                        </ul>
                    </div>
                    <Link className="text-xl font-extrabold"><span className="text-pink-500">H-R</span>
                    adisson</Link>
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
                        <svg className="swap-of text-pink-600 fill-current w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    </label>

                    {/* themset */}

                    {user ? <div className="z-20">

                        <div className="dropdown dropdown-end dropdown-hover">
                            <div tabIndex={0} className=" m-1"><img className="w-[30px] h-[30px] object-cover rounded-full" src={user?.photoURL}></img></div>
                            <ul tabIndex={0} className="dropdown-content z-[10]  menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>{user?.displayName}</a></li>
                                <li><button onClick={logoutHandler} className="btn bg-slate-500">Logout</button></li>
                            </ul>
                        </div>
                    </div> : <div className="flex gap-3 items-center">
                        <Link to="/login" className="bg-pink-500 text-white rounded background-transparent font-bold uppercase px-6 py-2 text-sm ">Login</Link>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Header;