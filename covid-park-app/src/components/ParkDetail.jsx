import React, { Component } from 'react'
import { getPark } from './services/apiCalls'
import ZoneCard from './ZoneCard'
import PlaceRating from './PlaceRating'

export default class ParkDetail extends Component
{
    state = {
        park: null,
        zones: [],
        filteredZones: []
    }

    componentDidMount()
    {
        this.getPark()
    }

    getPark = async () =>
    {
        let response = await getPark(this.props.match.params.id)
        this.setState({
            park: response.data,
            zones: response.data.zones,
        })
    }

    filterZones = () =>{
        let filteredZones = this.state.zones
        if (this.props.searchFormData !=="")
            {
                console.log(this.props.searchFormData)
             filteredZones = filteredZones.filter((filteredZone)=>{
                 let result = filteredZone.name.includes(this.props.searchFormData)
                 console.log(result)
                return result
            
             })   
            }
            // this.setState({filteredZones: filteredZones})
    }


    render()
    {
        const { park } = this.state
        this.filterZones()
        return (
            <>
                <div className="flex justify-between">
                    <h1 className="text-xl font-black text-green-400">{park && park.name}</h1>
                    <a className="text-xs underline hover:text-green-800" target="_blank" rel="noopener noreferrer" href={park && park.link}>{park && park.name}'s nycgovparks.org page</a>
                </div>
                <h2 className="text-md font-semibold text-green-600">{park && park.boro}</h2>
                <h2 className="text-sm text-gray-700">{park && park.address}</h2>
                <div className="text-sm">
                    {park && <PlaceRating place={park} />}
                </div>
                <div>
                    <img className="w-full h-32 overflow-hidden object-cover" src={park && park.picture_url} alt={park && park.name} />
                </div>

                <div className="flex flex-wrap justify-between">
                    {this.state.filteredZones.map((zone, index) =>
                        (<ZoneCard zone={zone} key={index} />)
                    )}
                </div>
            </>
        )
    }
}
