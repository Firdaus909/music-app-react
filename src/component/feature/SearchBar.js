import React, { useState } from 'react'
import { trackSearch } from '../../utility/api'
import { useTrackContext } from '../context/Tracks'

import './css/SearchBar.css'

function SearchBar() {
  const [error, setError] = useState(false)
  const [keyword, setKeyword] = useState("")
  const {setTracks} = useTrackContext()

  const search = async (e) => {
    e.preventDefault()
    
    if (!keyword){
      setError(true)
      return
    }
    setError(false)
    const { data } = await trackSearch(keyword)
    setTracks(data.tracks.items)
  }

  return (
    <div>
      <form className="search-form" onSubmit={e => search(e)}>
        <input className="search-input" value={keyword} type="text" onChange={e => setKeyword(e.target.value)}/>
        <span style={{display: error ? 'block' : 'none'}} className='search-error'>Please fill this out</span>
        <button className="search-button" type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar