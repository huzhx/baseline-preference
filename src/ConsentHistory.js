import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './ConsentHistory.module.css';
import Header from './Header';
import Footer from './Footer';
import { useScrollPosition } from './UseScrollPosition';
import IconButton from './IconButton';
import AppNavBar from './AppNavBar';
import StudyRequest from './StudyRequest';

const ConsentHistory = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const history = useHistory();

  const consentHistory = [
    {
      reqId: '1',
      institution: 'Stanford University',
      title: 'Clinical-trial of COVID-19 Convalescent Plasma in Outpatients',
      status: 'Data Not Shared with Research Team',
    },
    {
      reqId: '2',
      institution: 'Peking University First Hospital',
      title: 'COVID-19 Surveillance Based on Smart Wearable Device',
      status: 'Data Shared with Research Team',
    },
  ];

  const buttonLabelMap = {
    'Data Not Shared with Research Team': 'Modify Consent',
    'Data Shared with Research Team': 'View Data Shared',
  };

  const studies = [];
  for (let consentItem of consentHistory) {
    const studyInfo = {
      title: consentItem.title,
      institution: consentItem.institution,
      status: consentItem.status,
    };
    const consentStatus = consentItem.status;
    const buttonLabel = buttonLabelMap[consentStatus];
    studies.push(
      <StudyRequest
        key={consentItem.title}
        studyInfo={studyInfo}
        buttonLabel={buttonLabel}
        buttonHandler={() => {
          history.push(`/study-info/${consentItem.reqId}`);
        }}
      />
    );
  }

  return (
    <div className={styles.consent_history}>
      <div className={styles.consent_history__nav_bar}>
        <AppNavBar />
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
        <Footer alignContentEvenly={true} sticky={sticky} isPrimary>
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
