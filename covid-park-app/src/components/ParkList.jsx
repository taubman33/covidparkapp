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
        if (this.state.parks.length > 0)
        {
            return (
                <div>
                    {this.state.parks.map((park, index) => (
                        <Link key={index} to={`/parks/${park.id}`}><ParkCard park={park} /></Link>
                    ))}
                </div>
            )
        }
        else
        {
            return (<div className="text-xl p-2">Loading...</div>)
        }

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
