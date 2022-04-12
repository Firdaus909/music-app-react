import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import NavbarComponent from '../component/NavbarComponent';
import SearchBar from '../component/SearchBar';
import TrackCard from '../component/TrackCard';
import FormCreatePlaylist from '../component/FormCreatePlaylist';

import styles from './CreatePlaylist.module.css';

function CreatePlaylist() {
  const [isSearched, setIsSearched] = useState(false);
  const { tracks, selectedTracks } = useSelector((state) => state.tracks);

  return (
    <div className={styles.createpl}>
      <NavbarComponent />
      <div className={styles.createpl_container}>
        <h1 className={styles.createpl_title}>Create New Playlist</h1>
        <SearchBar setIsSearched={setIsSearched} />
        {isSearched && (
          <div className={styles.createpl_card_wrapper}>
            {tracks.length > 0 ? (
              tracks.map((tr) => <TrackCard key={tr.id} track={tr} />)
            ) : (
              <div className={styles.createpl_notracks}>No Tracks Found</div>
            )}
          </div>
        )}
      </div>
      {selectedTracks.length > 0 && <FormCreatePlaylist />}
    </div>
  );
}

export default CreatePlaylist;
