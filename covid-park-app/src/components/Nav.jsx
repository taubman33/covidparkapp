import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component
{
    render()
    {
        return (
            <div className="hidden sm:flex flex-col p-1 bg-gray-100 w-56">
                <input type="text" placeholder="Search..." />
                <Link to="/">LINK 1</Link>
                <Link to="/">LINK 2</Link>
                <Link to="/">LINK 3</Link>
                <Link to="/">LINK 4</Link>
                <Link to="/">LINK 5</Link>
            </div>
        )
    }
}
