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
            return "bg-yellow-400"
        }
        else if (rating > 2.5)
        {
            return "bg-green-600"
        }
    }

    let ratingString = Math.floor(props.rating * 10) / 10
    if (ratingString.toString().length === 1)
    {
        ratingString = ratingString.toString() + ".0"
    }

    return (
        <div className={`flex items-center ${props.additionalClasses}`} >
            {props.hideNumber ? "" :
                <div className="flex items-end">
                    {ratingString === -1 ? "Not yet rated" : ratingString}
                    {props.compact ? "" : <div className="text-gray-500">/3</div>}
                </div>
            }
            <div className={`${ratingColor(props.rating)} ${props.sizeClasses} rounded-full mx-1`}>
            </div>
        </div>
    )
}
