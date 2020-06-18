import React, { Component } from 'react'
import './styles/output.css'
import Layout from './components/Layout'
import { withRouter } from 'react-router-dom'
import axios from 'axios'




class App extends Component {
 constructor (props) {
   super(props)
 }


 state={
   searchbar:""
 }



//search bar input
 handleSearchInput = (e) =>{
  let value = e.target.value
  this.setState(
    {searchbar: value}
  ) 
}

//search bar submit
 handleSearchSubmit = (e) =>{
  e.preventDefault()
  this.props.history.push('/parks/1')
  } 



  render () {
  return (

    <div className="App">
      <div className="bg-gray-100 p-3 m-3">
        <Layout {...this.props}
             handleSearchInput={this.handleSearchInput}
             searchFormData={this.state.searchbar}
             handleSearchSubmit={this.handleSearchSubmit} 
             />
      </div>
    </div>
  )
 }
}

export default withRouter(App)
