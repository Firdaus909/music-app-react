import React from 'react'

const TrackComponent = ({source, title, artist, album}) => {
  return (
    <div className="track-item">
      <div className="album">
        <div className="album-image">
          <img src={source} />
        </div>
        <div className="album-info">
          <h2>{title}</h2>
          <h4>{artist} - {album}</h4>
          <button>Select</button>
        </div>
      </div>
    </div>
  )
}

export default TrackComponent