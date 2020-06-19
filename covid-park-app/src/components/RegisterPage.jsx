import React, { Component } from 'react'
import { handleSignup } from './services/auth'
import { GetRandomAvatarString } from './services/avatarOptions'
import UserForm from './Forms/UserForm'

export default class RegisterPage extends Component
{
    state = {
        email: ``,
        password: ``,
        name: ``,
        location: ``,
        picture_url: GetRandomAvatarString()
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

    tryRegister = async () =>
    {
        await handleSignup(this.state, () =>
        {
            this.props.history.push("/login")
        })
    }

    render()
    {
        return (
            <div className="p-2">
                <hr />
                <h2>Create a new account!</h2>
                <UserForm handleSubmit={this.tryRegister}
                    handleChange={this.handleChange}
                    randomizeAvatar={this.randomizeAvatar}
                    formData={this.state}
                    register={true} />
            </div>
        )
    }
}
