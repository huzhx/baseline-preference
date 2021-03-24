import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './DataRequests.module.css';
import Header from './Header';
import Footer from './Footer';
import { useScrollPosition } from './UseScrollPosition';
import IconButton from './IconButton';
import NavBar from './NavBar';
import StudyRequest from './StudyRequest';

const DataRequests = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const history = useHistory();

  const newRequests = [
    {
      reqId: '3',
      institution: 'Peking University First Hospital',
      sponsor: 'Peking University First Hospital',
      title: 'COVID-19 Surveillance Based on Smart Wearable Device',
    },
    {
      reqId: '4',
      institution: 'Medical Convergence Research Center, Wonkwang University',
      title: 'Analysis and classification of urinary stones',
    },
  ];
  const requests = [];
  for (let request of newRequests) {
    const studyInfo = {
      title: request.title,
      institution: request.institution,
    };
    requests.push(
      <StudyRequest
        key={request.title}
        studyInfo={studyInfo}
        buttonLabel="Answer Request"
        buttonHandler={() => {
          history.push(`/study-info/${request.reqId}`);
        }}
      />
    );
  }
  return (
    <div className={styles.data_requests}>
      <div className={styles.data_requests__nav_bar}>
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
      <div className={styles.data_requests__header}>
        <Header title="New Data Requests" />
      </div>
      <div className={styles['data_requests__header--noBackground']}>
        <Header title="New Data Requests" noBackground />
      </div>
      <div className={styles.data_requests__body}>
        <div className={styles.data_requests__content}>{requests}</div>
      </div>
      <div className={styles.data_requests__footer}>
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

export default DataRequests;
