import React, { Component } from 'react'
import './styles/output.css'
import Layout from './components/Layout'
import { withRouter } from 'react-router-dom'

class App extends Component
{
  constructor(props)
  {
    super(props)
  }


  state = {
    searchbar: ""
  }



  //search bar input
  handleSearchInput = (e) =>
  {
    let value = e.target.value
    this.setState(
      { searchbar: value }
    )
  }

  render()
  {
    return (
      <div className="bg-gray-100 p-3 m-3">
        <Layout {...this.props}
          handleSearchInput={this.handleSearchInput}
          searchFormData={this.state.searchbar}
        />
      </div>
    )
  }
}

export default withRouter(App)
