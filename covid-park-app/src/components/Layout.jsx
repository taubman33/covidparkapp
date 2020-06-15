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
                <Nav />
                <Main />
            </div>
            <Footer />
        </div>
    )
}


