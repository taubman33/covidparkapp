import React from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

export default function Nav(props)
{
    return (
        <div className="hidden md:flex flex-col mt-2 pt-2 px-1 bg-gray-100 w-48">
            <Searchbar
                {...props}
                handleSearchInput={props.handleSearchInput}
                searchFormData={props.searchFormData}
            />
            <Link className="underline hover:text-green-800" to="/parks/1">Central Park</Link>
            <Link className="underline hover:text-green-800" to="/parks/2">Flushing Meadows</Link>
            <Link className="underline hover:text-green-800" to="/parks/3">McCarren Park</Link>
        </div>

    )
}
