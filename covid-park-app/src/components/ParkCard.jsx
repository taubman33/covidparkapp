import React from 'react'
import PlaceRating from './PlaceRating'

export default function ParkCard(props)
{
    const { park } = props

    return (
        <div className="p-2 w-full bg-gray-200 rounded border border-gray-200 hover:bg-green-100 hover:border-green-300">
            <div className="flex flex-col">
                <div className="text-xl text-green-400 font-black mr-1">{park.name}</div>
                <PlaceRating place={park} />
            </div>
            <div>
                <img className="h-132 w-full object-cover object-center" src={park.picture_url} alt={park.name} />
            </div>


        </div>
    )
}
