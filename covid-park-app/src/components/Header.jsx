import React from 'react'
import { Link } from 'react-router-dom'
import { isLoggedIn, logout } from './services/auth'

export default function Header(props)
{
    const homeButtonIfNotAtHomeRoute = () =>
    {
        if (props.location.pathname !== "/")
        {
            return <Link className="header-button" to="/">Home</Link>
        }
        else
        {
            return <div className="header-button" to="/">Home</div>
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
                        className="header-button">Log out</Link>
                    <Link to="/user" className="header-button">Profile</Link>
                </>)
        }
        else
        {
            return (
                <>
                    <Link to="/login" className="header-button">Login</Link>
                    <Link to="/register" className="header-button">Register</Link>
                </>)
        }
    }

    return (
        <div className="flex bg-gray-100">
            <Link to="/" className="text-4xl text-green-600 hover:text-green-700 font-black">Park Safe</Link>
            {homeButtonIfNotAtHomeRoute()}
            {loginLogoutRegisterButtons()}
        </div >

    )
}

