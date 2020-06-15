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
                <>
                    <Link to="#"
                        onClick={() => { logout(() => { props.history.push("/") }) }}
                        className="bg-gray-200 border-gray-400 rounded-sm p-1 m-1">Log out</Link>
                    <Link to="/user" className="bg-gray-200 border-gray-400 rounded-sm p-1 m-1">Profile</Link>
                </>)
        }
        else
        {
            return (
                <>
                    <Link to="/login" className="bg-gray-200 border-gray-400 rounded-sm p-1 m-1">Login</Link>
                    <Link to="/register" className="bg-gray-200 border-gray-400 rounded-sm p-1 m-1">Register</Link>
                </>)
        }
    }

    return (
        <div className="flex bg-gray-100">
            <Link to="/" className="text-4xl text-green-600 font-black">Park Safe</Link>
            {loginLogoutRegisterButtons()}
        </div>

    )
}

