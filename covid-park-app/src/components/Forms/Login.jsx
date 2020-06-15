import React from 'react'

const Login = (props) =>
{

  return (

    <div>
      <hr />
      <h2>Login to your existing account!</h2>
      <form onSubmit={(e) =>
      {
        e.preventDefault()
        props.handleLogin()
      }} >

        <p>Email:</p>
        <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />
        <p>Password:</p>
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1">Login</button>
      </form>
    </div>
  )
}

export default Login