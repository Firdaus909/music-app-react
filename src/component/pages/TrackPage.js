import React, { useState } from 'react'
import TrackCard from '../feature/TrackCard'
import ModalButton from '../feature/ModalButton'
import PlaylistModal from './PlaylistModal'
import UserPlaylist from '../feature/UserPlaylist'
import SearchBar from '../feature/SearchBar'

import { useTrackContext } from '../context/Tracks'
import { useTokenContext } from '../context/Token'

import './css/TrackPage.css'
import { usePlaylistContext } from '../context/Playlist'

function TrackPage() {
  const [show, setShow] = useState(false)
  const { user } = useTokenContext()
  const { tracks } = useTrackContext()
  const { playlist } = usePlaylistContext()

  return (
    <div className='Track'>
      <PlaylistModal show={show} onClose={() => setShow(false)} />
      <div className="greetings">
        {user ? <h1>Welcome Back, {user.display_name}</h1> : <h2>Login to Continue</h2>}
      </div>
      {user && (
        <>
          <h2 className="sub-greetings">My Playlist</h2>
          <div className='playlist'>
            {playlist.map((pl) => (
              <UserPlaylist
                key={pl.id}
                playlist={pl}
              />
            ))}
          </div>
        </>)}
      {/* {(user && show) && <h2 className="sub-greetings">Searched Tracks</h2>} */}
      {user && (
        <>
          <h3 style={{ fontWeight: 200, marginBottom: '1rem' }}>Looking for another Tracks?</h3>
          <SearchBar />
        </>
      )}
      <div className='track-list' style={{ minHeight: '50vh' }}>
        {tracks.length > 0 &&
          tracks.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
            />
          ))}
      </div>
      <div onClick={() => { setShow(true) }}>
        <ModalButton />
      </div>
    </div>
  )
}

export default TrackPage