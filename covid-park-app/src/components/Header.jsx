import React from 'react'
import { Link } from 'react-router-dom'
import { isLoggedIn, logout } from './services/auth'

export default function Header(props)
{
    const loginLogoutRegisterButtons = () =>
    {
        if (isLoggedIn())
        {
            return (
                <div className="flex">
                    <Link to="#"
                        onClick={() => { logout(() => { props.history.push("/") }) }}
                        className="header-button text-sm sm:text-lg h-8 sm:h-10">Log out</Link>
                    <Link to="/user" className="header-button text-sm sm:text-lg h-8 sm:h-10">Profile</Link>
                </div>)
        }
        else
        {
            return (
                <div className="flex">
                    <Link to="/login" className="header-button text-sm sm:text-lg h-8 sm:h-10">Login</Link>
                    <Link to="/register" className="header-button text-sm sm:text-lg h-8 sm:h-10">Register</Link>
                </div>)
        }
    }

    return (
        <div className="flex bg-gray-100 items-center">
            <Link to="/" className="text-xl sm:text-2xl md:text-4xl text-green-600 hover:text-green-700 font-black py-1">Park Safe</Link>
            <Link className="header-button text-sm sm:text-lg h-8 sm:h-10" to="/">Home</Link>
            {loginLogoutRegisterButtons()}
        </div >

    )
}

