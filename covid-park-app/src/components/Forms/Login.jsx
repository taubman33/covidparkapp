import React from 'react';


const Login = (props) => {
 
// let username = props.formData.username
  return (
     
    <div>
      <hr />
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >

        <p>Username:</p>
        <input name="username" type="text" 
        // value={props.formData.username} onChange={props.handleChange}  // 
        />

        <p>Password:</p>

        <input name="password" type="password" 
        // value={props.formData.password} onChange={props.handleChange}
         />
        <br/>
        <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1"><h4>Login</h4></button>
        
      </form>
    </div>
  );
}

export default Login;