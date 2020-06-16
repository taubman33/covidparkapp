import React from 'react'
import Rating from './Rating'

export default function PlaceRating(props)
{
    const { place, compact } = props

    return (
        <div className="flex items-end">
            <div className="flex items-end">
                {compact ? "" : <div className="pr-1"> Average</div>}
                <Rating rating={place.average_rating} sizeClasses={compact ? "w-3 h-3" : "w-4 h-4"} compact={compact} />
            </div>
            <div className="text-xs flex">
                <div className="flex">
                    <div className="pr-1">{compact ? "M" : "Masks"}</div>
                    <Rating rating={place.average_masks} sizeClasses="w-2 h-2" compact={compact} />
                </div>
                <div className="flex">
                    <div className="pr-1">{compact ? "D" : "Distancing"}</div>
                    <Rating rating={place.average_distancing} sizeClasses="w-2 h-2" compact={compact} />
                </div>
                <div className="flex">
                    <div className="pr-1">{compact ? "NC" : "Not crowded"}</div>
                    <Rating rating={place.average_not_crowded} sizeClasses="w-2 h-2" compact={compact} />
                </div>
            </div>
        </div>

    )
}
