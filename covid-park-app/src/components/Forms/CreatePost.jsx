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
         
            <div className="w-52">
            <h2> Add a post for this zone</h2>
         
            <form onSubmit={this.onSubmit}>
            <div className="form" >


            <label for="content"><h2>Comment</h2></label>
              
              <textarea rows="8" name="content" id="content" placeholder=" " required=""></textarea>
                
               <br/>

                <h2>Are People Wearing Masks? </h2>

              <div className="m-3">
                <input type="radio"
                name="masks"
                id="Yes"
                value="true"
                onChange={this.handleFormChange} />
                <label for="true"> Yes</label>
                </div>
                <input type="radio"
                name="masks"
                id="No"
                value="false"
                onChange={this.handleFormChange} />
                <label for="false"> No</label>  
                <br/>

               


                <h2>Is There Space for People?: </h2>
              <input
                type="radio"
                name="not_crowded"
                value="true"
                onChange={this.handleFormChange} />
                <label for="true"> Yes</label>

               <input
                type="radio"
                name="not_crowded"
                value="false"
                onChange={this.handleFormChange} />
                <label for="false"> No</label>   
                <br/>


                <h2>Are People Practicing Social Distancing?: </h2>
              <input
                type="radio"
                name="distancing"
                value={this.state.distancing}
                onChange={this.handleFormChange} />
                <label for="true"> Yes</label>

               <input
                type="radio"
                name="distancing"
                value={this.state.distancing}
                onChange={this.handleFormChange} />
                <label for="false"> No</label>  
                <br/>
                
              </div>

              <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1"><h4>Submit</h4></button>
            </form>
          </div>
         </div>
      )
    }   
  }
  

  
