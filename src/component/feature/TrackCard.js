import React from 'react'
import { useTrackContext } from '../context/Tracks'
import './TrackCard.css'

function TrackCard({source,title,artist,album, uri}) {
  const { selectedTracks, setSelectedTracks} = useTrackContext()

  const handleSelect = () => {
    const selected = selectedTracks.find((turi) => turi === uri)
    let newSelectedTracks
    if(!selected) {
      newSelectedTracks = [...selectedTracks,uri]
    }
    else {
      newSelectedTracks = selectedTracks.filter((turi) => turi !== uri)
    }
    setSelectedTracks(newSelectedTracks)
  }

  const checkButton = () => {
    const selected = selectedTracks.find((turi) => turi === uri)
    if(!selected) return "Select"
    return "Deselect"
  }

  return (
    <div className="track-item">
      <div className="album">
        <div className="album-image">
          <img src={source} alt={title} />
        </div>
        <div className="album-info">
          <h2>{title}</h2>
          <h4>{artist} - {album}</h4>
          <button onClick={handleSelect}>{checkButton()}</button>
        </div>
      </div>
    </div>
  )
}

export default TrackCard