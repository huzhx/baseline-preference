import React, { useState } from 'react';

import styles from './StudyDataSharing.module.css';

import DataSharingElement from './DataSharingElement';
import Header from './Header';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import Footer from './Footer';
import IconButton from './IconButton';
import NavBar from './NavBar';

const StudyDataSharing = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const dataElements = [
    'demographic',
    'general clinical',
    'biospecimen',
    'genetic',
    'mental health',
    'sexual and reproductive health',
    'family history',
  ];

  const requiredElements = new Set();
  requiredElements.add('demographic');
  requiredElements.add('biospecimen');
  requiredElements.add('genetic');
  requiredElements.add('family history');

  const content = [];
  for (let element of dataElements) {
    content.push(<DataSharingElement key={element} dataElement={element} required={requiredElements.has(element)} />);
  }
  return (
    <div className={styles.study_data_sharing}>
      <div className={styles.study_data_sharing__nav_bar}>
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
      <div className={styles.study_data_sharing__header}>
        <Header title="Data Sharing Setting" />
      </div>
      <div className={styles['study_data_sharing__header--noBackground']}>
        <Header title="Data Sharing Setting" noBackground />
      </div>
      <div className={styles.study_data_sharing__body}>
        <div className={styles.study_data_sharing__content}>
          <div className={styles.study_data_sharing__form}>
            <div className={styles.study_data_sharing__label_container}>
              <span className={[styles.study_data_sharing__label, styles.align_left].join(' ')}>Data Requested</span>
              <span className={styles.study_data_sharing__label}>Consent to Share</span>
            </div>
            {content}
            <div className={styles.study_data_sharing__label_container}>
              <span className={[styles.study_data_sharing__label, styles.align_left].join(' ')}>*Required</span>
            </div>
          </div>
          <div className={styles.study_data_sharing__button_container}>
            <Button label="Consent" />
          </div>
        </div>
      </div>
      <div className={styles.study_data_sharing__footer}>
        <Footer alignContentEvenly={false} sticky={sticky}>
          <Button label="Consent" />
        </Footer>
      </div>
    </div>
  );
};

export default StudyDataSharing;
