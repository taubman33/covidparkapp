import React, { Component } from 'react'
import { Link}  from 'react-router-dom'
import { getZone } from './services/apiCalls'
import Post from './Post'
import CreatePost from './Forms/CreatePost'

export default class ZoneDetail extends Component {

    state = {
        zone: null 
    }

    componentDidMount()
    {
        this.getZone()
    }

    getZone= async () =>
    {
        console.log(this.props.match.params.id)
        let response = await  getZone(this.props.match.params.id)
        this.setState({
            zone: response.data
        })
        console.log(response)
    }

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


    render() {
        const {zone} = this.state
        return (
            <div>
        

             <h1> {zone && zone.name}</h1>
                <h2> {zone && zone.location}</h2>
                <h2> Average Rating: {zone && this.zoneRating(zone.average_rating)}</h2>
                
                <div className="w-5/12">
                <img src={zone && zone.picture_url}/>
                </div>

                <div className="flex flex-wrap">
        {zone && zone.posts.map ((post, index) =>
             (<Post post = {post} key={index}/>)
             )}
             </div>

  
             {/* <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1">
                    <Link to={CreatePost}>Add Post 
                    </Link>
                    </button> */}


             <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1">
                 <Link to="/parks/1">
                     Back to Park</Link>
                     </button>

            </div>
        )
    }
}
