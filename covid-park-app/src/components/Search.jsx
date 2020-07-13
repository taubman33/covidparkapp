import React, { Component } from 'react'
import { getAllZones } from './services/apiCalls'
import ZoneCard from './ZoneCard'

export default class Search extends Component
{
    state = {
        zones: []
    }


    componentDidMount()
    {
        this.getZones()
    }

    getZones = async () =>
    {
        let response = await getAllZones()
        this.setState({
            zones: response.data,
        })
    }


    filterZones = () =>
    {
        let filteredZones = this.state.zones
        if (this.props.searchFormData !== "")
        {
            filteredZones = filteredZones.filter((filteredZone) =>
            {
                let result = filteredZone.name.toLowerCase().includes(this.props.searchFormData.toLowerCase())
                return result
            })
        }
        // this.setState({filteredZones: filteredZones})
        return (<div className="flex flex-wrap justify-between">
            {filteredZones.map((zone, index) =>
                (<ZoneCard zone={zone} key={index} />)
            )}
        </div>
        )
    }

    render()
    {
        return (
            <div>
                {this.filterZones()}
            </div>
        )
    }
}
