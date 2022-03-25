import React from 'react'

const TrackList = ({source, title, artist, album}) => {
  return (
    <div className="album">
      <div className="album-image">
        <img src={source} />
      </div>
      <div className="album-info">
        <h1>{title}</h1>
        <h4>{artist} - {album}</h4>
        <button className='btn btn-purple'>Select</button>
      </div>
    </div>
  )
}

export default TrackList