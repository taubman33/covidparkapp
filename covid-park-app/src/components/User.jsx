import React, { Component } from 'react'
import UserImg from './assets/dummyuserimage.jpg'

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

                
                <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1"><h4>Edit Profile</h4></button>


               
            </div>
        )
    }
}
