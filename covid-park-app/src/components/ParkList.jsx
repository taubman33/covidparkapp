import React, { Component } from 'react'
import { getAllParks } from './services/apiCalls'
import ParkCard from './ParkCard'

export default class ParkList extends Component
{
    state = {
        parks: []
    }


    componentDidMount()
    {
        this.getParks()
    }

    getParks = async () =>
    {
        let response = await getAllParks()
        this.setState({
            parks: response.data
        })
    }

    mapParks = () =>
    {
        return (
            <div className="">
                {this.state.parks.map((park, index) => (
                    <ParkCard park={park} key={index} />
                ))}
            </div>

        )
    }

    render()
    {
        return (
            <div>
                {this.mapParks()}
            </div>
        )
    }
}
