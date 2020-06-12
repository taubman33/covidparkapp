import React from 'react'
import { Link } from 'react-router-dom'

export default function Header()
{

    let loggedIn = false

    const loginLogoutRegisterButtons = () =>
    {
        if (loggedIn)
        {
            return (
                <>
                    <Link to="/" className="bg-gray-200 border-gray-400 rounded-sm p-1 m-1">Log out</Link>
                </>)
        }
        else
        {
            return (
                <>
                    <Link to="/login" className="bg-gray-200 border-gray-400 rounded-sm p-1 m-1">Login</Link>
                    <Link to="/register" className="bg-gray-200 border-gray-400 rounded-sm p-1 m-1">Register</Link>
                    <Link to="/user" className="bg-gray-200 border-gray-400 rounded-sm p-1 m-1">User</Link>
                
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

