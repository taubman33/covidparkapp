import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

export default function Layout(props)
{
    return (
        <div>
            <div className="xl:w-320 xl:mx-auto">
                <Header {...props} />
                <div className="flex">
                    <Nav
                        {...props}
                        handleSearchInput={props.handleSearchInput}
                        searchFormData={props.searchFormData} />
                    <Main
                        {...props}
                        searchFormData={props.searchFormData} />
                </div>
            </div>
            <Footer />
        </div>
    )
}