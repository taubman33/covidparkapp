import React, { Component } from 'react'

export default class Post extends Component
{

    render()
    {
        const { post } = this.props

        return (
            <div className="bg-gray-300 m-1 p-2 w-full">
                <h2>{post.id}</h2>
                <h2>{post.created_at}</h2>
                <h1> {post.content}</h1>
                <div>
                    <input type="checkbox" name="masks" checked={post.masks} />
                    <label for="masks"> People are generally wearing masks in this area</label>
                </div>
                <div>
                    <input type="checkbox" name="distancing" checked={post.distancing} />
                    <label for="distancing"> People are generally social distancing in this area</label>
                </div>
                <div>
                    <input type="checkbox" name="not_crowded" checked={post.not_crowded} />
                    <label for="not_crowded"> The park is generally not crowded in this area</label>
                </div>
                {/* <h1> {post.user.name}</h1>
                <div className="w-10 h-10 rounded-full"><img src={post.user.picture_url} /></div>
            */}
           
                </div> 
        )
    }
}
