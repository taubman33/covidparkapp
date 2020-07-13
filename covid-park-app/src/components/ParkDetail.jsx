import React, { Component } from 'react'
import { getPark } from './services/apiCalls'
import ZoneCard from './ZoneCard'
import PlaceRating from './PlaceRating'
import LazyImage from 'react-lazy-blur-image'

export default class ParkDetail extends Component
{
    state = {
        park: null,
        zones: []
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
        const { park } = this.state
        //this.filterZones()
        return (
            <div className="p-2">
                <div className="flex justify-between">
                    <h1 className="text-xl font-black text-green-400">{park && park.name}</h1>
                    <a className="text-xs underline hover:text-green-800" target="_blank" rel="noopener noreferrer" href={park && park.link}>{park && park.name}'s nycgovparks.org page</a>
                </div>
                <h2 className="text-md font-semibold text-green-600">{park && park.boro}</h2>
                <h2 className="text-sm text-gray-700">{park && park.address}</h2>
                <div className="text-sm">
                    {park && <PlaceRating place={park} />}
                </div>
                {park && <LazyImage
                    // placeholder={'../logo192.png'}
                    uri={park.picture_url}
                    render={(src, style) => <img alt={park.name} className="w-full h-32 overflow-hidden object-cover" src={src} style={style} />}
                />}

                <div className="text-xs text-center text-gray-100 bg-gray-900">{park && park.picture_attribution} (
                    <a className="underline" target="_blank" rel="noopener noreferrer" href={park && park.picture_attribution_link}>License</a>)</div>
                {this.filterZones()}
            </div>
        )
    }
}
