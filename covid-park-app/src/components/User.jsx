import React, { Component } from 'react'
//import UserImg from './assets/dummyuserimage.jpg'
import { isLoggedIn } from './services/auth'
import { Redirect, Link } from 'react-router-dom'
import { getProfile } from './services/apiCalls'

<<<<<<< HEAD
export default class User extends Component {
    render() {
        return (
            <div>
                <h1>Hello ~Username~</h1>
                {/* <h1>{{this.props.user && this.props.user[0].username}}</h1> */}

                <div className="w-40">
                
                 <img src={UserImg}/>
                {/* <img src={{this.props.user && this.props.user[0].image}/> */}
                </div>

                
                <h2> Email Address: </h2>
                <h2>{this.props.user && this.props.user[0].email}</h2>

                <h3> Location:</h3>
                <h3>{this.props.user && this.props.user[0].location}</h3>
=======
export default class User extends Component
{
    state = {
        user: null
    }
>>>>>>> 03c2df7a0a83aed1ebe165ca97fe3c4e80ca2b34

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
                        <img key="userAvatarPic" src={picture_url} alt="avatar" />
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
