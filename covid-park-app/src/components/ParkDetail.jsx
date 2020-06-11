import React, { Component } from 'react'

export default class ParkDetail extends Component {
    render() {
        return (
            <div>
                <h2> Park Detail</h2>

                <h1>Park Name</h1>
                {/* <h1>{this.park.name}</h1> */}

                <h2> Boro </h2>
                {/* <h2>{this.park.boro}</h2> */}

                <h3> Address</h3>
                {/* <h3>{this.park.address}</h3> */}

                <h3> Link </h3>
                {/* <h3> {this.park.link}</h3> */}
                
                <h3>Rating</h3>
                {/* <h3> {this.park.rating}</h3> */}



                <h3>Image</h3>
                {/* <img src={this.park.image}/> */}

            </div>
        )
    }
}
