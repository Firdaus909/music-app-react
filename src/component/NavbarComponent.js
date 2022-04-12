import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../utils/auth';

import styles from './NavbarComponent.module.css';

function NavbarComponent() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_brand}>DarkShadow</div>
      <div className={styles.navbar_nav}>
        <Link className={styles.navbar_link} to="/myplaylist">
          My Playlist
        </Link>
        <Link className={styles.navbar_link} to="/create">
          Create Playlist
        </Link>
      </div>
      <div className={styles.navbar_logout}>
        <button type="button" className={styles.navbar_btn} onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default NavbarComponent;
