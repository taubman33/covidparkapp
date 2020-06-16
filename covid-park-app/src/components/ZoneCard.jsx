import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PlaceRating from './PlaceRating'

export default class ZoneCard extends Component
{
    render()
    {
        const { zone } = this.props
        return (
            <Link to={`/zones/${zone.id}`}>
                <div className="w-64 border rounded-sm bg-gray-100 border-gray-300 hover:border-green-300 hover:bg-green-100 mt-2 p-2 shadow hover:shadow-none hover:translate-y-8">
                    <div className="text h-12 font-semibold"> {zone && zone.name}</div>
                    <div className="text-sm h-16"> {zone && zone.location}</div>
                    <div className="text-sm">{zone && <PlaceRating place={zone} compact={true} />}</div>
                    <img className="w-full h-24 overflow-hidden object-cover object-center" src={zone && zone.picture_url} alt={zone && zone.name} />
                </div>
            </Link>
        )

    }
}
