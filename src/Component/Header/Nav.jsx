import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from '@iconify/react';

const Nav = () => {
    const [open, setOpen] = useState(false)
    const authToken = sessionStorage.getItem('Auth Token');
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem('Auth Token');
        navigate('/login')
      }

    return (
        <div className="shadow-md w-full fixed top-0 left-0 z-40">
            <div className="md:flex items-center justify-between bg-gray-900 text-white py-5 md:px-10 px-7">
                <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 align-middle">
                    <span className="text-3xl text-indigo-600 mr-8 pt-2">
                        <Link to="/home"><Icon icon="logos:netflix" /></Link>
                    </span>
                </div>
                <div onClick={() => setOpen(!open)}
                     className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-900 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'}`}>
                    <li className="md:ml-8 text-xl md:my-0 my-7">
                        <Link to="/home"><a href="" className="text-gray-400 hover:text-teal-400 duration-300 cursor-pointer">Home</a></Link>
                    </li>
                    {
                        authToken === null ? (
                            <Link to="/signup"><button className="bg-teal-500 text-white text-xl hover:bg-teal-600 font-[Poppins] py-2 cursor-pointer px-6 rounded md:ml-8 duration-500">Get Started</button></Link>
                        ) : (
                            <button className="bg-teal-500 text-white text-xl hover:bg-teal-600 font-[Poppins] py-2 cursor-pointer px-6 rounded md:ml-8 duration-500" onClick={handleLogout}>Log out</button>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Nav;