import React from 'react'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './Footer'

export default function Layout(props)
{
    return (
        <div>
            <Header {...props} />
            <div className="flex">
                <Nav 
                {...props}
                handleSearchInput={props.handleSearchInput}
                handleSearchSubmit={props.handleSearchSubmit}
                searchFormData={props.searchFormData} />
                
                <Main 
                {...props}
                searchFormData={props.searchFormData}/>
          
            </div>
            <Footer />
        </div>
    )
}
 

