import React, { Component } from 'react';
import axios from "axios";
import { createPost } from '../services/apiCalls'
  
  
  export default class CreatePost extends Component {
  
    state = {
      content: '',
      masks: false,
      not_crowded: false,
      distancing: false,
      zone_id: this.props.match.params.id
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
          [name]: value==="true"
        })
      }
  
      onSubmit = async (evt) =>{
          evt.preventDefault()
         await createPost(this.state)
          
          // let token = localStorage.getItem('authToken');
          // let res = await axios({
          //   url: `http://localhost:3000/api/v1/posts`,
          //   method: "POST",
          //   data: this.state,
          //   headers: {'authorization': `Bearer ${token}`}
          // })
       
          // const post = res.data
        
     
          this.props.history.push(`/zones/${this.props.match.params.id}` )
      }




      postComment = (event) =>{
        const { name, value } = event.target;
        this.setState({
            [name]: value
          })
        console.log('something')
        }




    render() {
      //   controlled component form that statefully updates name and photo
      console.log(this.state)
      return (
        <div>
         
            <div >
            <h2 className="text-3xl text-green-600 hover:text-green-700 font-black"> Add Post For This Zone </h2>
         
            <form onSubmit={this.onSubmit}>
            <div className="form" >


            <label for="content"><h2 className="text-xl font-black text-green-400">Comment</h2></label>
              
            <textarea rows="8" 
              name="content" 
              id="content"
               placeholder="" 
               required=""
               onChange={this.postComment}>
            
            </textarea>
                
            <br/>

            <h2 className="text-xl font-black text-green-400">Are People Wearing Masks? </h2>

              
                <input type="radio"
                name="masks"
                id="true"
                style={{margin:"1rem"}}
                value="true"                
                checked={this.state.masks===true}
                onChange={this.handleFormChange} />
                <label for="true"> Yes</label>
          
                <input type="radio"
                name="masks"
                id="false"
                style={{margin:"1rem"}}
                value= "false"
                checked={this.state.masks===false}
                onChange={this.handleFormChange} />
                <label for="false"> No</label>  
                <br/>

               

                <h2 className="text-xl font-black text-green-400">Is The Park Below 50% Capacity? </h2>
              <input
                type="radio"
                name="not_crowded"
                id="true"
                style={{margin:"1rem"}}
                value="true"
                checked={this.state.not_crowded===true}
                onChange={this.handleFormChange} />
                <label for="true"> Yes</label>

               <input
                type="radio"
                name="not_crowded"
                id="false"
                style={{margin:"1rem"}}
                value="false"
                checked={this.state.not_crowded===false}
                onChange={this.handleFormChange} />
                <label for="false"> No</label>   
                <br/>


              <h2 className="text-xl font-black text-green-400">Are People Practicing Social Distancing? </h2>
              <input
                type="radio"
                name="distancing"
                id="true"
                style={{margin:"1rem"}}
                value="true"
                checked={this.state.distancing===true}
                onChange={this.handleFormChange} />
                <label for="true"> Yes</label>

               <input
                type="radio"
                name="distancing"
                id="false"
                style={{margin:"1rem"}}
                value= "false"
                checked={this.state.distancing===false}
                onChange={this.handleFormChange} />
                <label for="false"> No</label>  
                <br/>
                
              </div>


              <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1"

              ><h4>Submit</h4></button>
            </form>
          </div>
         </div>
    )
    }   
  }

  
