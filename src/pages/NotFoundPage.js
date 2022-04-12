import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={styles.not_found}>
      <img
        src="https://drive.google.com/uc?export=view&id=1egCGNjReemU-QYYm8tF5GfIib5r5LUd7"
        alt="404 Page Not Found"
        className={styles.not_found_image}
      />
      <Link className={styles.not_found_link} to="/">
        Redirect to HomePage
      </Link>
    </div>
  );
}

export default NotFoundPage;
