import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import User from './User'
import EditUser from './Forms/EditUser'
import ParkList from './ParkList'
import ParkDetail from './ParkDetail'
import Login from './LoginPage'
import Register from './RegisterPage'

export default class Main extends Component
{
    render()
    {
        return (
            <div className=" w-5/6">
                <Route exact path='/' component={() => <ParkList />} />
                <Route exact path='/user' component={() => <User />} />
                <Route exact path='/user/:id/edit' component={() => <EditUser />} />
                <Route exact path='/parks/:id' render={(props) => <ParkDetail {...props} />} />
                <Route exact path='/login' component={() => <Login />} />
                <Route exact path='/register' component={() => <Register />} />
            </div>
        )
    }
}
