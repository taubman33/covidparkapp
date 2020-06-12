import React, { Component } from 'react'
import UserImg from './assets/dummyuserimage.jpg'

export default class User extends Component {
    render() {
        return (
            <div className="bg-red-200">
                <h2> User </h2>


                <h1>Hello ~Username~</h1>
                {/* <h1>{this.user.name}</h1> */}

                <h2> Email Address: </h2>
                {/* <h2>{this.user.email}</h2> */}

                <h3> Location:</h3>
                {/* <h3>{this.user.location}</h3> */}

                <div className="w-40">
                <h3> Image: </h3>
                 <img src={UserImg}/>
                {/* <img src={this.user.image}/> */}
                </div>
            </div>
        )
    }
}
