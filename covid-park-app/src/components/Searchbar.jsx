import React from 'react';


export default (props) => {
  
  return (
    <div className = "searchbar-container">
      <form action="">
        <input id = "searchBar" type="text" placeholder="Filter Park Zones"
          onChange={props.handleSearchInput}
          value={props.searchFormData}
        />
 
         <button className="bg-green-200 border-gray-400 rounded-sm p-1 m-1" 
         id = "button" 
         onClick={props.handleSearchSubmit}> <h4>Search</h4></button>
        
      </form>
    
    </div>
    
  )
} 