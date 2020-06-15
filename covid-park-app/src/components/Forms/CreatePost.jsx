import React, { Component } from 'react';
import axios from "axios";
  
  
  export default class CreatePost extends Component {
  
    state = {
      content: '',
      masks: false,
      not_crowded: false,
      distancing: false,
    }
  
    async componentDidMount(){
      if (!this.props.isUpdateForm){
          return 
      }
  
    const idParams = this.props.match.params.id
     console.log(this.props)
      if (this.props.post.id !== idParams){
          const res = await axios.get("https://localhost3000/" + idParams)
          const {content, masks, not_crowded, distancing} = res.data.post;
         
          this.setState({
            content,
            masks,
            not_crowded,
            distancing
          })
      } else {
          const {content, masks, not_crowded, distancing} = this.props.post
          this.setState({
            content,
            masks,
            not_crowded,
            distancing
          })
      }
      
  }
  
    handleFormChange = (e)=> {
      const { name, value } = e.target;
      this.setState({
          [name]: value
        })
      }
  
      onSubmit = async (evt) =>{
          evt.preventDefault()
          
    
          let token = localStorage.getItem('authToken');
          let res = await axios({
            url: 'localhost.com/3000',
            method: "POST",
            data: this.state,
            headers: {'authorization': `Bearer ${token}`}
          })
       
          const post = res.data
        
     
          this.props.history.push('/zones/:id/post' + post.id )
      }
  

    render() {
      //   controlled component form that statefully updates name and photo
      return (
        <div>
         
            <div className="create-form">
            <h2> Add a post for this zone</h2>
         
            <form onSubmit={this.onSubmit}>
            <div className="form" >


              <label>Comment:</label>
              <input
                type="text"
                name="content"
                value={this.state.content} 
                onChange={this.handleFormChange} />
                <br/>

                <label>Are People Wearing Masks? </label>
              <input
                type="boolean"
                name="masks"
                value={this.state.masks}
                onChange={this.handleFormChange} />
                <br/>

                <label>Is There Space for People?: </label>
              <input
                type="boolean"
                name="not_crowded"
                value={this.state.not_crowded}
                onChange={this.handleFormChange} />
                <br/>


                <label>Are People Practicing Social Distancing?: </label>
              <input
                type="text"
                name="distancing"
                value={this.state.distancing}
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
  
  export default CreatePost;
