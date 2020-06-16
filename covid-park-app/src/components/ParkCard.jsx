import React from 'react'
import Rating from './Rating'

export default function ParkCard(props)
{
    const { park } = props

    return (
        <div className="">
            <div className="flex">
                <div className="text-xl">{park.name}</div>
                <div className="flex items-end">
                    <div className="m-1 flex">
                        <div className="pr-1">Average </div>
                        <Rating rating={park.average_rating} sizeClasses="w-4 h-4" />
                    </div>
                    <div className="text-xs flex">
                        <div className="m-1 flex">
                            <div className="pr-1">Masks</div>
                            <Rating rating={park.average_masks} sizeClasses="w-2 h-2" />
                        </div>
                        <div className="m-1 flex">
                            <div className="pr-1">Distancing</div>
                            <Rating rating={park.average_distancing} sizeClasses="w-2 h-2" />
                        </div>
                        <div className="m-1 flex">
                            <div className="pr-1">Not crowded</div>
                            <Rating rating={park.average_not_crowded} sizeClasses="w-2 h-2" />
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <img src={park.picture_url} alt={park.name} />
            </div>


        </div>
    )
}
