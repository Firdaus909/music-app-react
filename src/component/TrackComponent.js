import React, { useState } from 'react'

const TrackComponent = ({source, title, artist, album}) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div className="track-item">
      <div className="album">
        <div className="album-image">
          <img src={source} alt={title} />
        </div>
        <div className="album-info">
          <h2>{title}</h2>
          <h4>{artist} - {album}</h4>
          <button onClick={() => setIsSelected(!isSelected)}>{isSelected ? "Deselect" : "Select"}</button>
        </div>
      </div>
    </div>
  )
}

export default TrackComponent