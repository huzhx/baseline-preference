import React from 'react';

import styles from './DataRequests.module.css';
import Study from './Study';

const DataRequests = () => {
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
      <div className={styles.data_requests__header}>New Data Requests</div>
      <div className={styles.data_requests__body}>{requests}</div>
      <div className={styles.data_requests__footer}>
        <div>Home</div>
        <div>My profile</div>
      </div>
    </div>
  );
};

export default DataRequests;
