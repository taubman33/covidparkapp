import React, { Component } from 'react'
import { getZone } from './services/apiCalls'


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
                
                <div className="w-40">
                <img src={zone && zone.picture_url}/>
                </div>

         



            </div>
        )
    }
}
