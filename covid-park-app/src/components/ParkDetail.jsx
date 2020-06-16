import React, { Component } from 'react'
import { getPark } from './services/apiCalls'
import ZoneCard from './ZoneCard'

export default class ParkDetail extends Component {
    state = {
        park: null 
    }

    componentDidMount()
    {
        this.getPark()
    }

    getPark = async () =>
    {
        console.log(this.props.match.params.id)
        let response = await  getPark(this.props.match.params.id)
        this.setState({
            park: response.data
        })
        console.log(response)
    }

    render() {
        const {park} = this.state
        return (
            <div>
        
          
            <h1>{park && park.name}</h1>

            <h2>{park && park.boro}</h2>
            <h2>{park && park.address}</h2>
            <h2>{park && park.link}</h2>

            <div className="w-48">
            <img src={park && park.picture_url}/>
            </div>
        

        <div className="flex flex-wrap">
        {park && park.zones.map ((zone, index) =>
             (<ZoneCard zone = {zone} key={index}/>)
             )}
             </div>
         



            </div>
        )
    }
}
