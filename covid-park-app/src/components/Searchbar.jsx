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
          console.log(props.location.pathname)
          if (props.location.pathname === "/search")
          {
            // do nothing already on result page
          }
          else if (props.location.pathname === "/")
          {
            // on home page, redirect to search page
            props.history.push("/search")
          }
          else if (props.location.pathname.includes("parks"))
          {
            // do nothing, this will filter on the park page
          }
          else
          {
            props.history.push("/search")
          }

        }}

      />
      {props.searchFormData !== '' ?
        <button
          className="bg-green-200 border-gray-400 rounded-sm p-1 m-1"
          name="ClearButton"
          onClick={(e) =>
          {
            e.preventDefault()
            props.handleSearchInput(e)
            if (props.location.pathname === "/search")
            {
              props.history.goBack()
            }
          }}
        >
          Clear
          </button>
        : ''}

    </div>

  )
} 