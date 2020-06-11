import React from 'react';

// This component will handle our user register form
const Register = (props) => {

  return (
    <div>

      <h2>Register</h2>


      <form onSubmit={props.handleRegister} onChange={props.authHandleChange} >

      <p>Username: </p>
      <input name="username" type="text"  value={props.formData.username} onChange={props.handleChange}/>

      <p>Email: </p>
      <input name="email" type="text" value={props.formData.email} onChange={props.handleChange} />

      <p>Password: </p>
      <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />

      <p>Location: </p>
      <input name="location" type="text" value={props.formData.location} onChange={props.handleChange} />

      <p>User Image: </p>
      <input name="user-image" type="text" value={props.formData.userimage} onChange={props.handleChange} />

      <button><h4>Register</h4></button>

      </form>
      
    </div>
  );
}

export default Register;



