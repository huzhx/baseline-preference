import React from 'react';

import styles from './Home.module.css';
import HomeElement from './HomeElement';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__content}>
        <HomeElement label="New Data Requests" unreadNum="2" />
        <HomeElement label="Consent History" />
        <HomeElement label="Default Data Sharing Preferences" />
      </div>
      <div className={styles.home__button_container}>
        <div>Home</div>
        <div>My profile</div>
      </div>
    </div>
  );
};

export default Home;
