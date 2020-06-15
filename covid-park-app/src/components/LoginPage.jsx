import React, { Component } from 'react'
import Login from './Forms/Login'
import { handleLogin, isLoggedIn } from './services/auth'
import { Redirect } from 'react-router-dom'

export default class LoginPage extends Component
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

    tryLogin = async () =>
    {
        await handleLogin(this.state, () =>
        {
            this.props.history.push("/")
        })
    }

    render()
    {
        if (isLoggedIn())
        {
            return <Redirect to="/" />
        }
        else
        {
            return (
                <div>
                    <h2> Login </h2>
                    <Login handleLogin={this.tryLogin} handleChange={this.handleChange} formData={this.state} />
                </div>
            )
        }

    }
}
