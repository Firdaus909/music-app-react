import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tracksAction } from '../store/tracks-slice';

import styles from './TrackCard.module.css';

function TrackCard({ track }) {
  const { album, name, artists, uri } = track;
  const selectedTracks = useSelector((state) => state.tracks.selectedTracks);
  const dispatch = useDispatch();

  const handleSelect = () => {
    const selected = selectedTracks.find((turi) => turi === uri);
    let newSelected;
    if (!selected) {
      newSelected = [...selectedTracks, uri];
    } else {
      newSelected = selectedTracks.filter((turi) => turi !== uri);
    }
    dispatch(tracksAction.setSelectedTracks(newSelected));
  };

  const isSelected = selectedTracks.find((turi) => turi === uri);

  return (
    <div className={styles.trackcard}>
      <div className={styles.trackcard_header}>
        <img src={album.images[0].url} alt={name} />
      </div>
      <div className={styles.trackcard_body}>
        <h2>{name}</h2>
        <h4>
          {artists[0].name} - {album.name}
        </h4>
      </div>
      <div className={styles.trackcard_footer}>
        <button
          type="button"
          className={styles.trackcard_btn}
          onClick={handleSelect}
        >
          {isSelected ? 'Deselect' : 'Select'}
        </button>
      </div>
    </div>
  );
}

export default TrackCard;
