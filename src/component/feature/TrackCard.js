import React from 'react'
import { useTrackContext } from '../context/Tracks'

import './css/TrackCard.css'

function TrackCard({ track }) {
  const { album, name, artists, uri } = track
  const { selectedTracks, setSelectedTracks } = useTrackContext()

  const handleSelect = () => {
    const selected = selectedTracks.find((turi) => turi === uri)
    if (!selected) {
      setSelectedTracks((prevSelectedTracks) => [...prevSelectedTracks, uri])
    }
    else {
      setSelectedTracks(selectedTracks.filter((turi) => turi !== uri))
    }
  }

  const checkButton = () => {
    const selected = selectedTracks.find((turi) => turi === uri)
    if (!selected) return "Select"
    return "Deselect"
  }

  return (
    <div className="track-item">
      <div className="album">
        <div className="album-image">
          <img src={album.images[0].url} alt={name} />
        </div>
        <div className="album-info">
          <h2>{name}</h2>
          <h4>{artists[0].name} - {album.name}</h4>
          <button onClick={handleSelect}>{checkButton()}</button>
        </div>
      </div>
    </div>
  )
}

export default TrackCard