import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'

import User from './User'
import EditUser from './Forms/EditUser'
import ParkList from './ParkList'
import ParkDetail from './ParkDetail'
import Login from './LoginPage'
import Register from './RegisterPage'

export default class Main extends Component {
    render() {
        return (
            <div>
                <h2> Main</h2>
            
                <Route exact path= '/' component= { ()=> <ParkList/>  }/>
                <Route exact path= '/user' component= { ()=> <User/>  }/>
                <Route exact path= '/user/:id/edit' component= { ()=> <EditUser/>  }/>
                <Route exact path= '/parks/:id' component= { ()=> <ParkDetail/>  }/>
                <Route exact path= '/login' component= { ()=> <Login/>  }/>
                <Route exact path= '/register' component= { ()=> <Register/>  }/>


            </div>
        )
    }
}
