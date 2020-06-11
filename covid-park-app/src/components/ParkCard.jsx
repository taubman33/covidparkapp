import React from 'react'

export default function ParkCard(props)
{
    console.log(props)
    const { park } = props

    const parkRating = (rating) =>
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

    return (
        <div className="m-2 p-2 w-full bg-gray-200 rounded shadow-lg">
            <div className="flex">
                <div className="text-xl">{park.name}</div>
                <div className="m-1">{parkRating(park.average_rating)}</div>
            </div>
            <div>
                <img src={park.picture_url} />
            </div>


        </div>
    )
}
