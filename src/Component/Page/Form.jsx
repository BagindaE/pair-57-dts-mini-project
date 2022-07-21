import React from 'react';
import { Link } from "react-router-dom";
import LoginImg from '../../Assets/netflix.jpeg'

const Form = ({title, setEmail, setPassword, handleAction}) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
            <div className="hidden sm:block">
                <Link to="/home"><img className="w-full h-full object-cover cursore-pointer" src={LoginImg} alt="" /></Link>
            </div>
            <div className="bg-gray-800 flex flex-col justify-center">
                <div className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg">
                    <div className='text-white font-bold text-3xl center capitalize mb-10 text-center'>
                        <h2 >{title} Form</h2>
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label htmlFor="">E-mail</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" placeholder="Input your email" type="text" onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="flex flex-col text-gray-400 py-2">
                        <label htmlFor="">Password</label>
                        <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password" placeholder="Input your password" onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div>
                        <button onClick={handleAction} className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/60 hover:shadow-teal-500/40 text-white font-semibold rounded-lg">{title}</button>
                        <div className="flex justify-between text-gray-400 py-2">
                            {
                                title === "Log in" ? (
                                    <p>Dont have an account ? <Link to="/signup"><span className="cursor-pointer font-extrabold hover:text-teal-400 duration-300" >Sign up</span></Link></p>
                                ) : (
                                    <p>Already have an account,  <Link to="/login"><span className="cursor-pointer font-extrabold hover:text-teal-400 duration-300" >Log in</span></Link></p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Form