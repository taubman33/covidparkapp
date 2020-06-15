import React from 'react'

// This component will handle our user register form
const Register = (props) =>
{

  return (
    <div>
      <hr />
      <h2>Create a new account!</h2>
      <div className="flex">
        <form
          className="mt-6"
          onSubmit={(e) =>
          {
            e.preventDefault()
            props.handleRegister()
          }} >
          <div>
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

          </div>
          <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1">Register</button>

        </form>
        <div className="flex flex-col text-center ml-5">
          <p>User Image </p>
          <div>
            <img className="h-48" src={props.formData.picture_url} />
          </div>
          <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1" onClick={props.randomizeAvatar} type >Randomize Avatar</button>
          <p className="text-xs">Powered by <a className="underline" href="https://github.com/fangpenlin/avataaars-generator">Avataaars</a></p>
        </div>
      </div>
    </div>
  )
}

export default Register



