import React from 'react';
import styles from './MyPlaylistCard.module.css';

function MyPlaylistCard({ playlist }) {
  const { name, description, images, owner } = playlist;
  return (
    <div className={styles.myplaylistcard}>
      <div className={styles.myplaylistcard_header}>
        <img src={images[0].url} alt={name} />
      </div>
      <div className={styles.myplaylistcard_body}>
        <h2>{name}</h2>
        <h4>
          {description.length > 90
            ? `${description.substring(0, 90)} ...`
            : description}
        </h4>
      </div>
      <div className={styles.myplaylistcard_footer}>
        <p>{`By: ${owner.display_name}`}</p>
      </div>
    </div>
  );
}

export default MyPlaylistCard;
