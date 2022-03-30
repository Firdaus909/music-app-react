import {useState, useEffect} from 'react'
import data from '../../dataAlbum/all-sample';
import TrackComponent from '../../component/TrackComponent';
import axios from 'axios';

import './style.css';

const Track = () => {
  const [keyWord, setKeyWord] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [tracks, setTracks] = useState([])
  const [token, setToken] = useState("")
  const [isSearch, setIsSearch] = useState(false)

  const BASE_URL = process.env.REACT_APP_SPOTIFY_BASE_URL

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if(!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash=""
        window.localStorage.setItem("token", token)
    }

    setToken(token)
  })

  const searchTracks = async (e) => {
    e.preventDefault();
    const {data} = await axios.get(`${BASE_URL}/search`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: keyWord,
        type:"track",
        limit:"50"
      }
    })
    setIsSearch(true)
    setTracks(data.tracks.items)
  }

  return (
    <div className="Track">
    {!token ? (
      <div>You need to login</div>
    ) : (
      <>
        <form onSubmit={searchTracks} className="search-form">
          <input className="search-input" type="text" onChange={e => setKeyWord(e.target.value)} />
          <button className="search-button" type='submit'>Search</button>
        </form>
        <div className='track-list'>
          {isSearch ? tracks.length > 0 ? 
            tracks.map((track) => (
            <TrackComponent
              key={track.id}
              source={track.album.images[0].url}
              title={track.name}
              artist={track.artists[0].name}
              album={track.album.name}
            />
            )) : (
            <div className='no-tracks'>No Tracks Found</div>
            ) : (<></>)
          }
        </div>
      </>
    )}
    </div>
  )
}

export default Track
