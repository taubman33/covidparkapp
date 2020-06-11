import React from 'react'

export default function ParkCard(props)
{
    console.log(props)
    const { park } = props
    return (
        <div className="m-2 p-2 w-48 bg-gray-200 rounded shadow-lg">
            {park.name}
        </div>
    )
}
