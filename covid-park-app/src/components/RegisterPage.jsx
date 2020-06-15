import React, { Component } from 'react'
import Register from './Forms/Register'
import { handleSignup } from './services/auth'


export default class RegisterPage extends Component
{
    state = {
        email: ``,
        password: ``
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
                <Register handleRegister={this.tryRegister} handleChange={this.handleChange} formData={this.state} />
            </div>
        )
    }
}
