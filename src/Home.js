import React, { useState } from 'react';

import styles from './Home.module.css';
import HomeElement from './HomeElement';
import Header from './Header';
import Footer from './Footer';
import { useScrollPosition } from './UseScrollPosition';
import IconButton from './IconButton';

const Home = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  return (
    <div className={styles.home}>
      <Header title="iAGREE" />
      <div className={styles.home__body}>
        <div className={styles.home__content}>
          <HomeElement label="New Data Requests" unreadNum="2" />
          <HomeElement label="Consent History" />
          <HomeElement label="Default Data Sharing Preferences" />
        </div>
      </div>
      <Footer alignContentEvenly={true} sticky={sticky}>
        <IconButton label="Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-home"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
        </IconButton>
        <IconButton label="My profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-user"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </IconButton>
      </Footer>
    </div>
  );
};

export default Home;