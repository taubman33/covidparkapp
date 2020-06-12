import React, { Component } from 'react'

export default class Post extends Component {

    render() {
        const {post} = this.props

        return (
            <div>
               <h2>{post.id}</h2> 
               <h2>{post.created_at}</h2>
               <h1> {post.content}</h1>
            </div>
        )
    }
}
