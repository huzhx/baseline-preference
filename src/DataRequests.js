import React, { useState } from 'react';

import styles from './DataRequests.module.css';
import Study from './Study';
import Header from './Header';
import Footer from './Footer';
import { useScrollPosition } from './UseScrollPosition';
import IconButton from './IconButton';

const DataRequests = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const newRequests = [
    {
      institution: 'University of California San Diego',
      title: 'Clinic visits for patients with uncontrolled diabetes by demographic characteristics',
    },
    {
      institution: 'University of California Irvine',
      title: 'Understanding healthcare providers’technology use in asthma care',
    },
  ];
  const requests = [];
  for (let request of newRequests) {
    requests.push(<Study key={request.title} institution={request.institution} title={request.title} />);
  }
  return (
    <div className={styles.data_requests}>
      <Header title="New Data Requests" />
      <div className={styles.data_requests__body}>
        <div className={styles.data_requests__content}>{requests}</div>
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
            width="24"
            height="24"
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
  );
};

export default DataRequests;
