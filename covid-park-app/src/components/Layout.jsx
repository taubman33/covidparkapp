import React, { Component } from 'react'
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

export default class Layout extends Component {
    constructor() {
        super();
        }
        render() {
            return (
            <div>
            <Header/>
            <Nav/>
            <Main/>
            <Footer/>




            </div>
            )
            }


}

