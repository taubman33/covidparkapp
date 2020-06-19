import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getZone } from './services/apiCalls'
import PlaceRating from './PlaceRating'
import Post from './Post'

export default class ZoneDetail extends Component
{

    state = {
        zone: null
    }

    componentDidMount()
    {
        this.getZone()
    }

    getZone = async () =>
    {
        let response = await getZone(this.props.match.params.id)
        this.setState({
            zone: response.data
        })
    }

    render()
    {
        const { zone } = this.state

        return (
            <div className="p-2">

                <div>
                    <h1 className="text-xl text-green-400 font-black"> {zone && zone.name}</h1>
                    <h2 className="text-md font-semibold text-green-600"> {zone && zone.location}</h2>
                </div>


                {zone && <PlaceRating place={zone} />}
                <img className="w-full h-108 object-cover object-center" src={zone && zone.picture_url} alt={zone && zone.name} />

                <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1">
                    <Link to={`/zones/${this.props.match.params.id}/createPost`}>
                        Add Post
                    </Link>

                </button>


                <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1">
                    <Link to="/parks/1">
                        Back to Park</Link>
                </button>

                <div className="flex flex-col-reverse">
                    {zone && zone.posts.map((post, index) =>
                        (<Post post={post} key={index} />)
                    )}
                </div>


            </div>
        )
    }
}
