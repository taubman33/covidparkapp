import React, { Component } from 'react'
import { GetRandomAvatarString } from './services/avatarOptions'
import { getProfile, editProfile } from './services/apiCalls'
import UserForm from './Forms/UserForm'

export default class EditUserPage extends Component
{
    state = {
        email: ``,
        password: ``,
        name: ``,
        location: ``,
        picture_url: ``
    }

    async componentDidMount()
    {
        let response = await getProfile()
        this.setState({
            ...response.data
        })
    }

    randomizeAvatar = () =>
    {
        this.setState({
            picture_url: GetRandomAvatarString()
        })
    }

    handleChange = event =>
    {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    trySubmit = async () =>
    {
        let response = await editProfile(this.state)
        if (response.data.message === "ok")
        {
            this.props.history.push("/user")
        }
    }

    render()
    {
        return (
            <div>
                <hr />
                <h2>Edit your account details!</h2>
                <UserForm
                    handleSubmit={this.trySubmit}
                    handleChange={this.handleChange}
                    randomizeAvatar={this.randomizeAvatar}
                    formData={this.state}
                    register={false} />
            </div>
        )
    }
}
