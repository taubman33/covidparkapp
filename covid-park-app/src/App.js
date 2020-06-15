import React from 'react'
import './styles/output.css'
import Layout from './components/Layout'
import { withRouter } from 'react-router-dom'


function App(props)
{

  return (
    <div className="App">
      <div className="bg-gray-100 p-3 m-3">
        <Layout {...props} />
      </div>
    </div>
  )
}

export default withRouter(App)
