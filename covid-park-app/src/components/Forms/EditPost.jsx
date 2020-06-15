import React, { Component } from 'react';
import axios from "axios";
import {editPost, getZone } from '../../services/api-helper'


export default class EditPost extends Component {

  state = {
    content: '',
    masks: false,
    not_crowded: false,
    distancing: false,
    user: '',
    zone: ''
  }


    componentDidMount(){ 

    this.getZone()
}

getZone = async () =>
  {
    const idParams = this.props.match.params.id
    const res = await axios.get("https://localhost3000/zones" + idParams)
        const {content, masks, not_crowded, distancing, user, zone} = res.data.zone;
       
        this.setState({
          content,
          masks,
          not_crowded,
          distancing,
          user,
          zone
        })
  }

  handleFormChange = (e)=> {
    const { name, value } = e.target;
    this.setState({
        [name]: value
      })
    }

    onSubmit = async (evt) =>{
        evt.preventDefault()    
        const idParams = this.props.match.params.id
        let res = updatePedal(idParams,this.state)
        this.props.history.push('/pedals/' + idParams )
    }


  render() {
    
    return (
      <div >
        <div  >
          <h2>  Edit your post</h2>
          
          <form onSubmit={this.onSubmit}>
          <div>

            <label>Description: </label>
            <input
              type="text"
              name="content"
              value={this.state.content}
              onChange={this.handleFormChange} />
              <br/>

              <label>Are people wearing masks?: </label>
            <input
              type="boolean"
              name="masks"
              value={this.state.content}
              onChange={this.handleFormChange} />
              <br/>

              <label>Are there open spaces in the park?: </label>
            <input
              type="boolean"
              name="not_crowded"
              value={this.state.content}
              onChange={this.handleFormChange} />
              <br/>

              <label> Are people practicing social distancing?: </label>
            <input
              type="boolean"
              name="distancing"
              value={this.state.content}
              onChange={this.handleFormChange} />
              <br/>


            </div>
          
            <button><h4>Submit</h4></button>


          </form>
        </div>


       </div>
    )
  }   
}