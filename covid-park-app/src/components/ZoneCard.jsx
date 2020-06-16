import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditPost from './Forms/EditPost'

export default class ZoneCard extends Component
{
    zoneRating = (rating) =>
    {
        if (rating === -1)
        {
            return ("Not yet rated")
        }
        else if (rating < 1)
        {
            return (<div className="flex"><div>{rating}</div><div className="bg-red-600 w-6 h-6 rounded-full"></div></div>)
        }
        else if (rating <= 2.5)
        {
            return (<div className="flex"><div>{rating}</div><div className="bg-yellow-500 w-6 h-6 rounded-full"></div></div>)
        }
        else if (rating > 2.5)
        {
            return (<div className="flex"><div>{rating}</div><div className="bg-green-600 w-6 h-6 rounded-full"></div></div>)
        }
    }


    render()
    {

        const { zone } = this.props

        return (
<<<<<<< HEAD
            <div>
                <Link to={`/zones/${zone.id}`}>
                <div className= "h-64 w-64 border border-gray-300 m-4">
                    <h1> {zone && zone.name}</h1>
                    <h2> {zone && zone.location}</h2>
                    <h2> Average Rating: {zone && this.zoneRating(zone.average_rating)}</h2>
                    
                    <div className="w-40">
                    <img src={zone && zone.picture_url}/>
                    </div>
                </div>
                    </Link>
            </div>
           
=======
            <Link to={`/zones/${zone.id}`}>
                <div className="w-64 border rounded-sm bg-gray-100 border-gray-300 hover:border-green-300 hover:bg-green-100 mt-2 p-2 shadow hover:shadow-none hover:translate-y-8">
                    <div className="text h-12 font-semibold"> {zone && zone.name}</div>
                    <div className="text-sm h-16"> {zone && zone.location}</div>
                    <div className="text-xs"> Average Rating: {zone && this.zoneRating(zone.average_rating)}</div>
                    <img className="w-full h-24 overflow-hidden object-cover object-center" src={zone && zone.picture_url} alt={zone && zone.name} />
                </div>
            </Link>
        )
>>>>>>> 03c2df7a0a83aed1ebe165ca97fe3c4e80ca2b34

        )
   }
}
