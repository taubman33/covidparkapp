import React, { Component } from 'react'
import moment from 'moment'
import Rating from './Rating'

export default class Post extends Component
{

    render()
    {
        const { post } = this.props

        return (
            <div className="bg-gray-300 my-1 p-2 w-full rounded-sm">

                <div className="flex justify-between flex-col md:flex-row">
                    <div className="flex items-center">
                        <img className="w-12 h-12 mr-1 -m-1 rounded-full bg-gray-100 border border-gray-700 shadow-lg" src={post.user.picture_url} alt="Avatar" />
                        <div className="text-xl mr-1 font-bold text-green-400"> {post.user.name}</div>
                        <div>{moment(post.created_at).fromNow()}</div>
                    </div>
                    <div className="flex items-center">
                        <div>Masks</div>
                        <Rating rating={post.masks ? 2.5 : 0} sizeClasses="w-3 h-3" hideNumber={true} />
                        <div>Social Distancing</div>
                        <Rating rating={post.distancing ? 2.5 : 0} sizeClasses="w-3 h-3" hideNumber={true} />
                        <div>Not Crowded</div>
                        <Rating rating={post.not_crowded ? 2.5 : 0} sizeClasses="w-3 h-3" hideNumber={true} />
                    </div>
                </div>
                <p className="bg-green-100 rounded-sm m-1 p-1"> {post.content}</p>
                {/* <div>
                    <input readOnly type="checkbox" name="masks" checked={post.masks} />
                    <label htmlFor="masks"> People are generally wearing masks in this area</label>
                </div>
                <div>
                    <input readOnly type="checkbox" name="distancing" checked={post.distancing} />
                    <label htmlFor="distancing"> People are generally social distancing in this area</label>
                </div>
                <div>
                    <input readOnly type="checkbox" name="not_crowded" checked={post.not_crowded} />
                    <label htmlFor="not_crowded"> The park is generally not crowded in this area</label>
                </div> */}

                {/* <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1">
                 {/* <Link to={EditPost}>
                     <h2>Edit your post</h2></Link>
                     
                     <h2> edit post</h2>
                     </button> */}

            </div>
        )
    }
}
