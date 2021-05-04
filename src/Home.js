import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { Redirect } from 'react-router-dom';

import styles from './Home.module.css';
import HomeElement from './HomeElement';
import Header from './Header';
import Footer from './Footer';
import { useScrollPosition } from './UseScrollPosition';
import IconButton from './IconButton';
import AppNavBar from './AppNavBar';
import { GET_PENDING_STUDIES_NUMBER } from './GraphQL/Queries';

const Home = () => {
  const [sticky, setSticky] = useState(false);
  const [pendingStudiesNumber, setPendingStudiesNumber] = useState(null);
  const { loading, error, data } = useQuery(GET_PENDING_STUDIES_NUMBER);
  const baselinePreferenceUrl = '/baseline-preference/v2/1/a-doctor-office';

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  useEffect(() => {
    if (data) {
      setPendingStudiesNumber(data.getPendingStudiesNumber);
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) {
    return <Redirect to="/portal-pick" />;
  }

  return (
    <div className={styles.home}>
      <div className={styles.home__nav_bar}>
        <AppNavBar />
      </div>
      <div className={styles.home__header}>
        <Header title="iAGREE" />
      </div>
      <div className={styles.home__body}>
        <div className={styles.home__content}>
          <HomeElement label="New Data Requests" unreadNum={pendingStudiesNumber} link="/data-requests" />
          <HomeElement label="Consent History" link="/consent-history" />
          <HomeElement label="Default Data Sharing Preferences" link={baselinePreferenceUrl} />
        </div>
      </div>
      <div className={styles.home__footer}>
        <Footer alignContentEvenly={true} sticky={sticky} isPrimary>
          <IconButton label="Home" link="/" isActive>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </IconButton>
          <IconButton label="My profile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </IconButton>
        </Footer>
      </div>
    </div>
  );
};

export default Home;
