import React from 'react'
import { Link } from 'react-router-dom'
import { isLoggedIn, logout } from './services/auth'

export default function Header(props)
{
    const homeButtonIfNotAtHomeRoute = () =>
    {
        if (props.location.pathname !== "/")
        {
            return <Link className="text-lg bg-gray-200 border-gray-400 rounded-sm p-2 m-1" to="/">Home</Link>
        }
        else
        {
            return <div className="text-lg bg-gray-100 text-gray-100 rounded-sm p-2 m-1" to="/">Home</div>
        }
    }

    const loginLogoutRegisterButtons = () =>
    {
        if (isLoggedIn())
        {
            return (
                <>
                    <Link to="#"
                        onClick={() => { logout(() => { props.history.push("/") }) }}
                        className="text-lg bg-gray-200 border-gray-400 rounded-sm p-2 m-1">Log out</Link>
                    <Link to="/user" className="text-lg bg-gray-200 border-gray-400 rounded-sm p-2 m-1">Profile</Link>
                </>)
        }
        else
        {
            return (
                <>
                    <Link to="/login" className="text-lg bg-gray-200 border-gray-400 rounded-sm p-2 m-1">Login</Link>
                    <Link to="/register" className="text-lg bg-gray-200 border-gray-400 rounded-sm p-2 m-1">Register</Link>
                </>)
        }
    }

    return (
        <div className="flex bg-gray-100">
            <Link to="/" className="text-4xl text-green-600 hover:text-green-500 font-black">Park Safe</Link>
            {homeButtonIfNotAtHomeRoute()}
            {loginLogoutRegisterButtons()}
        </div >

    )
}

