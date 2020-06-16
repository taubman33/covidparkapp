import React from 'react'

export default function Rating(props)
{
    const ratingColor = (rating) =>
    {
        if (rating === -1)
        {
            return "bg-gray-600"
        }
        else if (rating < 1)
        {
            return "bg-red-600"
        }
        else if (rating <= 2.5)
        {
            return "bg-yellow-600"
        }
        else if (rating > 2.5)
        {
            return "bg-green-600"
        }
    }

    const ratingString = Math.floor(props.rating * 10) / 10

    return (
        <div className={`flex ${props.additionalClasses}`} >
            <div className="flex">
                {ratingString === -1 ? "Not yet rated" : ratingString}
                <div className="text-gray-500">/3</div>
            </div>
            <div className={`${ratingColor(props.rating)} ${props.sizeClasses} rounded-full m-1`}>
            </div>
        </div>
    )
}
