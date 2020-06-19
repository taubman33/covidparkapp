import React, { Component } from 'react'
import { createPost, getZone } from '../services/apiCalls'


export default class CreatePost extends Component
{

  state = {
    content: '',
    masks: false,
    not_crowded: false,
    distancing: false,
    zone_id: this.props.match.params.id,
    zoneName: ''
  }

  async componentDidMount()
  {
    // if (!this.props.isUpdateForm)
    // {
    //   return
    // }

    // const idParams = this.props.match.params.id
    // console.log(this.props)
    // if (this.props.post.id !== idParams)
    // {
    //   const res = await axios.get("https://localhost3000/" + idParams)
    //   const { content, masks, not_crowded, distancing } = res.data.post

    //   this.setState({
    //     content,
    //     masks,
    //     not_crowded,
    //     distancing
    //   })
    // } else
    // {
    //   const { content, masks, not_crowded, distancing } = this.props.post
    //   this.setState({
    //     content,
    //     masks,
    //     not_crowded,
    //     distancing
    //   })
    // }
    let response = await getZone(this.props.match.params.id)
    this.setState({
      zoneName: response.data.name
    })
  }

  handleFormChange = (e) =>
  {
    const { name, value } = e.target
    this.setState({
      [name]: value === "true"
    })
  }

  onSubmit = async (e) =>
  {
    e.preventDefault()
    await createPost(this.state)
    this.props.history.push(`/zones/${this.props.match.params.id}`)
  }

  postComment = (e) =>
  {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  render()
  {
    //   controlled component form that statefully updates name and photo
    return (
      <div className="p-2">
        <div>
          <h2 className="text-3xl text-green-400 font-black"> Add Post For {this.state.zoneName} </h2>
          <form onSubmit={this.onSubmit}>
            <div className="form" >
              <label htmlFor="content"><h2 className="text-xl font-bold text-green-500">Comment</h2></label>
              <textarea className="w-full h-32"
                name="content"
                value={this.state.content}
                onChange={this.postComment}>
              </textarea>

              <br />

              <h2 className="text-xl font-bold text-green-500">Are People Wearing Masks? </h2>

              <input
                className="m-1"
                type="radio"
                name="masks"
                value="true"
                checked={this.state.masks === true}
                onChange={this.handleFormChange} />
              <label
                className="mr-3"
                htmlFor="true"> Yes</label>

              <input
                className="m-1"
                type="radio"
                name="masks"
                value="false"
                checked={this.state.masks === false}
                onChange={this.handleFormChange} />
              <label
                className="mr-3"
                htmlFor="false"> No</label>
              <br />



              <h2 className="text-xl font-bold text-green-500">Is The Park Below 50% Capacity? </h2>
              <input
                className="m-1"
                type="radio"
                name="not_crowded"
                value="true"
                checked={this.state.not_crowded === true}
                onChange={this.handleFormChange} />
              <label
                className="mr-3"
                htmlFor="true"> Yes</label>

              <input
                className="m-1"
                type="radio"
                name="not_crowded"
                value="false"
                checked={this.state.not_crowded === false}
                onChange={this.handleFormChange} />
              <label
                className="mr-3"
                htmlFor="false"> No</label>
              <br />


              <h2 className="text-xl font-bold text-green-500">Are People Practicing Social Distancing? </h2>
              <input
                className="m-1"
                type="radio"
                name="distancing"
                value="true"
                checked={this.state.distancing === true}
                onChange={this.handleFormChange} />
              <label
                className="mr-3"
                htmlFor="true"> Yes</label>

              <input
                className="m-1"
                type="radio"
                name="distancing"
                value="false"
                checked={this.state.distancing === false}
                onChange={this.handleFormChange} />
              <label
                className="mr-3"
                htmlFor="false"> No</label>
              <br />

            </div>


            <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1"

            ><h4>Submit</h4></button>
          </form>
        </div>
      </div>
    )
  }
}


