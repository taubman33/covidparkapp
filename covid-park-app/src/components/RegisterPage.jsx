import React, { Component } from 'react'
import Register from './Forms/Register'
import { handleSignup } from './services/auth'
import { GetRandomAvatarString } from './services/avatarOptions'

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
            <div>
                <Register handleRegister={this.tryRegister} handleChange={this.handleChange} randomizeAvatar={this.randomizeAvatar} formData={this.state} />
            </div>
        )
    }
}
