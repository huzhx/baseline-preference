import React, { useState } from 'react';

import styles from './DataRequests.module.css';
import Study from './Study';
import Header from './Header';
import Footer from './Footer';
import { useScrollPosition } from './UseScrollPosition';

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
        <div>Home</div>
        <div>My profile</div>
      </Footer>
    </div>
  );
};

export default DataRequests;
