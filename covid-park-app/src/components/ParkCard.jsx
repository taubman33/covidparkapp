import React from 'react'
import PlaceRating from './PlaceRating'
import LazyImage from 'react-lazy-blur-image'

export default function ParkCard(props)
{
    const { park } = props

    let smallParkPictureURL
    const a = park.picture_url.split('commons/')
    const b = park.picture_url.split('/')
    smallParkPictureURL = a.join('commons/thumb/') + '/50px-' + b[b.length - 1]
    if (a.length <= 1)
    {
        smallParkPictureURL = park.picture_url
    }


    return (
        <div className="p-2 w-full bg-gray-200 rounded border border-gray-200 hover:bg-green-100 hover:border-green-300">
            <div className="flex flex-col">
                <div className="text-xl text-green-400 font-black mr-1">{park.name}</div>
                <PlaceRating place={park} />
            </div>
            <LazyImage
                placeholder={smallParkPictureURL}
                uri={park.picture_url}
                render={(src, style) => <img alt={park.name} className="h-132 w-full object-cover object-center" src={src} style={style} />}
            />

            <div className="text-xs text-center text-gray-100 bg-gray-900">{park.picture_attribution}</div>
        </div>
    )
}
