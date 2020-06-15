import React from 'react'

// This component will handle our user register form
const Register = (props) =>
{

  return (
    <div>
      <hr />
      <h2>Create a new account!</h2>

      <form
        onSubmit={(e) =>
        {
          e.preventDefault()
          props.handleRegister()
        }} >

        <p>Email: </p>
        <input name="email" type="text"
          value={props.formData.email} onChange={props.handleChange}
        />

        <p>Password: </p>
        <input name="password" type="password"
          value={props.formData.password} onChange={props.handleChange}
        />

        <p>Name: </p>
        <input name="name" type="text"
          value={props.formData.name} onChange={props.handleChange}
        />

        <p>Location: </p>
        <input name="location" type="text"
          value={props.formData.location} onChange={props.handleChange}
        />

        <p>User Image: </p>
        <input name="picture_url" type="text"
          value={props.formData.picture_url} onChange={props.handleChange}
        />

        <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1"><h4>Register</h4></button>

      </form>

    </div>
  )
}

export default Register



