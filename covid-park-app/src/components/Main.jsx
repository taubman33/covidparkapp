import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import User from './User'
import EditUser from './Forms/EditUser'
import ParkList from './ParkList'
import ParkDetail from './ParkDetail'
import Login from './LoginPage'
import Register from './RegisterPage'
import ZoneDetail from './ZoneDetail'
import EditPost from './Forms/EditPost'
import CreatePost from './Forms/CreatePost'

export default class Main extends Component
{
    render()
    {
        return (
            <div className=" w-5/6">
                <Route exact path='/' render={(props) => <ParkList {...props} />} />
                <Route exact path='/user' render={(props) => <User {...props} />} />
                <Route exact path='/user/:id/edit' render={(props) => <EditUser {...props} />} />
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
