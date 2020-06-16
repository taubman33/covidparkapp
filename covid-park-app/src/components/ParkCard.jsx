import React from 'react'
import PlaceRating from './PlaceRating'

export default function ParkCard(props)
{
    const { park } = props

    return (
        <div className="">
            <div className="flex">
                <div className="text-xl mr-1">{park.name}</div>
                <PlaceRating place={park} />
            </div>
            <div>
                <img src={park.picture_url} alt={park.name} />
            </div>


        </div>
    )
}
