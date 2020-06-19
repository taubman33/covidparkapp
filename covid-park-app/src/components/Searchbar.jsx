import React from 'react'


export default (props) =>
{
  return (
    <div className="searchbar-container">
      <input
        type="text"
        placeholder="Filter Park Zones"
        value={props.searchFormData}
        className="w-full"
        onChange={(e) =>
        {
          e.preventDefault()
          props.handleSearchInput(e)
          props.history.push("/parks/1")
        }}

      />

    </div>

  )
} 