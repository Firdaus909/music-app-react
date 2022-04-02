import React from 'react'

import './SearchBar.css'

function SearchBar({setKeyword, searchTracks}) {
  return (
    <div>
      <form className="search-form" onSubmit={e => searchTracks(e)}>
        <input className="search-input" type="text" onChange={e => setKeyword(e.target.value)}/>
        <button className="search-button" type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar