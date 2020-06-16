import React, { Component } from 'react'
//import UserImg from './assets/dummyuserimage.jpg'
import { isLoggedIn } from './services/auth'
import { Redirect, Link } from 'react-router-dom'
import { getProfile } from './services/apiCalls'

export default class User extends Component
{
    state = {
        user: null
    }

    async componentDidMount()
    {
        let response = await getProfile()
        this.setState({
            user: response.data
        })
    }

    render()
    {
        if (!isLoggedIn())
        {
            return <Redirect to="/login" />
        }
        else
        {
            if (this.state.user)
            {
                const { name, picture_url, email, location } = this.state.user
                return (
                    <div>
                        <div>Hello {name} </div>
                        <img key="userAvatarPic" className="h-48" src={picture_url} alt="avatar" />
                        <div>Email: {email}</div>
                        <div>Location: {location}</div>
                        <Link to="/useredit" className="bg-green-200 border-gray-400 rounded-sm p-1">Edit Profile</Link>
                    </div>
                )
            }
            else
            {
                return "Loading..."
            }
        }
    }
}
