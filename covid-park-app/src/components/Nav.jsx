import React from 'react'
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
        </div>

    )
}
