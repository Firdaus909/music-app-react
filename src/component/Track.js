import React from 'react'
import data from '../dataAlbum/single-sample';
import TrackList from './TrackList';

import './Track.css';

const Track = () => {
  return (
    <div className="Track">
      <h1 className='title'>Song Playlist</h1>
      <div className='tracklist'>
        <TrackList 
          source={data.album.images[1].url}
          title={data.name}
          artist={data.artists[0].name}
          album={data.album.name}
        />
      </div>
    </div>
  )
}

export default Track
