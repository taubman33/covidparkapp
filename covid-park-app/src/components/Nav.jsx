import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component
{
    render()
    {
        return (
            <div className="hidden sm:flex flex-col p-1 bg-gray-100 w-40">
                <input type="text" placeholder="Search..." />
                <Link className="underline" to="/parks/1">Central Park</Link>
            </div>
        )
    }
}
