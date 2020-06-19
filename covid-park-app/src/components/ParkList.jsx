import React, { Component } from 'react'
import { getAllParks } from './services/apiCalls'
import ParkCard from './ParkCard'
import { Link } from 'react-router-dom'

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
            <div>
                {this.state.parks.map((park, index) => (
                    <Link key={index} to={`/parks/${park.id}`}><ParkCard park={park} /></Link>
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
