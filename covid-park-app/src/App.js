import React, { Component } from 'react'
import './styles/output.css'
import Layout from './components/Layout'
import { withRouter } from 'react-router-dom'

class App extends Component
{

  state = {
    searchbar: ""
  }



  //search bar input
  handleSearchInput = (e) =>
  {
    let value
    if (e.target.name === "ClearButton")
    {
      value = ""
    }
    else
    {
      value = e.target.value
    }
    this.setState(
      { searchbar: value }
    )
  }

  render()
  {
    return (
      <div className="bg-gray-100 p-3 m-1 min-h-screen">
        <Layout {...this.props}
          handleSearchInput={this.handleSearchInput}
          searchFormData={this.state.searchbar}
        />
      </div>
    )
  }
}

export default withRouter(App)
