import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getZone } from './services/apiCalls'
import PlaceRating from './PlaceRating'
import Post from './Post'
import LazyImage from 'react-lazy-blur-image'

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
                {zone && <LazyImage
                    // placeholder={'../logo192.png'}
                    uri={zone.picture_url}
                    render={(src, style) => <img alt={zone && zone.name} className="w-full h-108 object-cover object-center" src={src} style={style} />}
                />}

                <div className="text-xs text-center text-gray-100 bg-gray-900">{zone && zone.picture_attribution} (
                    <a className="underline" target="_blank" rel="noopener noreferrer" href={zone && zone.picture_attribution_link}>License</a>)</div>
                <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1">
                    <Link to={`/zones/${this.props.match.params.id}/createPost`}>
                        Add Post
                    </Link>

                </button>


                <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1">
                    <Link to="/">
                        Back to Parks</Link>
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
