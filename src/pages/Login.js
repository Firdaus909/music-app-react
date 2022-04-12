import React from 'react';
import { login } from '../utils/auth';
import styles from './Login.module.css';

function Login() {
  return (
    <div className={styles.login}>
      <button type="button" className={styles.login_button} onClick={login}>
        Login With Spotify
      </button>
    </div>
  );
}

export default Login;
