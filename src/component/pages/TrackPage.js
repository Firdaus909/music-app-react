import React, { useState } from 'react'
import axios from 'axios'
import SearchBar from '../feature/SearchBar'
import { useTrackContext } from '../context/Tracks'
import { useTokenContext } from '../context/Token'
import TrackCard from '../feature/TrackCard'

import './TrackPage.css'

function TrackPage() {
  const [keyword, setKeyword] = useState("")
  const { token } = useTokenContext()
  const { tracks, setTracks } = useTrackContext()

  const searchTracks = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`https://api.spotify.com/v1/search`, {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: keyword,
        type: 'track',
        limit: '10'
      }
    })

    setTracks(data.tracks.items)
  }

  return (
    <div className='Track'>
      {token ? (
        <div>
          <SearchBar
            keyword={keyword}
            setKeyword={setKeyword}
            searchTracks={searchTracks}
          />
        </div>
      ) : (
        <div>You need to Log In first</div>
      )}
      <div className='track-list'>
        {tracks.length > 0 &&
          tracks.map((track) => (
            <TrackCard
              key={track.id}
              source={track.album.images[0].url}
              title={track.name}
              artist={track.artists[0].name}
              album={track.album.name}
              uri={track.uri}
            />
          ))}
      </div>
    </div>
  )
}

export default TrackPage