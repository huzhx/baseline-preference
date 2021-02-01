import React, { useState } from 'react';

import styles from './ConsentHistory.module.css';
import Study from './Study';
import Header from './Header';
import Footer from './Footer';
import { useScrollPosition } from './UseScrollPosition';
import IconButton from './IconButton';
import NavBar from './NavBar';

const ConsentHistory = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const consentHistory = [
    {
      institution: 'University of California San Diego',
      title: 'Clinic visits for patients with uncontrolled diabetes by demographic characteristics 1',
      status: 'Consented',
    },
    {
      institution: 'University of California Irvine',
      title: 'Understanding healthcare providers’technology use in asthma care 2',
      status: 'Declined',
    },
    {
      institution: 'University of California San Diego',
      title: 'Clinic visits for patients with uncontrolled diabetes by demographic characteristics 3',
      status: 'Consented',
    },
    {
      institution: 'University of California Irvine',
      title: 'Understanding healthcare providers’technology use in asthma care 4',
      status: 'Declined',
    },
    {
      institution: 'University of California San Diego',
      title: 'Clinic visits for patients with uncontrolled diabetes by demographic characteristics 5',
      status: 'Consented',
    },
    {
      institution: 'University of California Irvine',
      title: 'Understanding healthcare providers’technology use in asthma care 6',
      status: 'Declined',
    },
  ];
  const studies = [];
  for (let consentItem of consentHistory) {
    studies.push(
      <Study
        key={consentItem.title}
        institution={consentItem.institution}
        title={consentItem.title}
        status={consentItem.status}
      />
    );
  }

  return (
    <div className={styles.consent_history}>
      <div className={styles.consent_history__nav_bar}>
        <NavBar>
          <IconButton label="iAgree" flat>
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
          <IconButton label="My profile" flat>
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
        </NavBar>
      </div>
      <div className={styles.consent_history__header}>
        <Header title="Consent History" />
      </div>
      <div className={styles['consent_history__header--noBackground']}>
        <Header title="Consent History" noBackground />
      </div>
      <div className={styles.consent_history__body}>
        <div className={styles.consent_history__content}>{studies}</div>
      </div>
      <div className={styles.consent_history__footer}>
        <Footer alignContentEvenly={true} sticky={sticky}>
          <IconButton label="Home" link="/">
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

export default ConsentHistory;
