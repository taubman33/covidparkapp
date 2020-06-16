import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import User from './User'
import ParkList from './ParkList'
import ParkDetail from './ParkDetail'
import Login from './LoginPage'
import Register from './RegisterPage'
import ZoneDetail from './ZoneDetail'
import EditUserPage from './EditUserPage'

export default class Main extends Component
{
    render()
    {
        return (
            <div className="m-2 p-2 w-full bg-gray-200 rounded shadow-lg">
                <Route exact path='/' render={(props) => <ParkList {...props} />} />
                <Route exact path='/user' render={(props) => <User {...props} />} />
                <Route exact path='/useredit' render={(props) => <EditUserPage {...props} />} />
                <Route exact path='/parks/:id' render={(props) => <ParkDetail {...props} />} />
                <Route exact path='/login' render={(props) => <Login {...props} />} />
                <Route exact path='/register' render={(props) => <Register {...props} />} />
                <Route exact path='/zones/:id' render={(props) => <ZoneDetail {...props} />} />

              
                <Route exact path='/createPost' render={(props) => <CreatePost {...props} /> }/>
                <Route exact path='/editPost/:id' render={(props)=> <EditPost {...props}/> }/> 
       
            </div>
        )
    }
}
