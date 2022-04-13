import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NavbarComponent from '../component/NavbarComponent';
import MyPlaylistCard from '../component/MyPlaylistCard';
import styles from './MyPlaylist.module.css';

function MyPlaylist() {
  const playlist = useSelector((state) => state.tracks.userPlaylist);
  const { user } = useSelector((state) => state.user);

  return (
    <div className={styles.myplaylist}>
      <NavbarComponent />
      <div className={styles.myplaylist_container}>
        {user && (
          <>
            <h1
              className={styles.myplaylist_title}
            >{`${user.display_name}'s Playlist`}</h1>
            {playlist.length > 0 ? (
              <div className={styles.myplaylist_card_wrapper}>
                {playlist.map((pl) => (
                  <MyPlaylistCard key={pl.id} playlist={pl} />
                ))}
              </div>
            ) : (
              <div className={styles.myplaylist_noplaylist}>
                You have no saved tracks.{' '}
                <Link className={styles.myplaylist_link} to="/create">
                  Create One
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MyPlaylist;
