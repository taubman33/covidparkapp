import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'



export default function Nav (props){
        return (
            <div className="hidden sm:flex flex-col mt-2 pt-2 px-1 bg-gray-100 w-40">
                <Searchbar
                {...props}
                handleSearchInput={props.handleSearchInput}
                handleSearchSubmit={props.handleSearchSubmit}
                searchFormData={props.searchFormData}
                />
                <Link className="underline hover:text-green-800" to="/parks/1">Central Park</Link>
            </div>
        )
}
