import React from 'react'
import data from '../dataAlbum/all-sample';
import TrackList from './TrackList';

import './Track.css';

const Track = () => {
  return (
    <div className="Track">
      <h1 className='title'>Song Playlist</h1>
      <div className='track-list'>
        {data.map((track, index) => (
          <TrackList
            key={track.id}
            source={track.album.images[0].url}
            title={track.name}
            artist={track.artists[0].name}
            album={track.album.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Track
