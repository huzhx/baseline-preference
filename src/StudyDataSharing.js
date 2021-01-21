import React, { useState } from 'react';

import styles from './StudyDataSharing.module.css';

import DataSharingElement from './DataSharingElement';
import Header from './Header';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import Footer from './Footer';

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
      <Header title="Data Sharing Setting" />
      <div className={styles.study_data_sharing__body}>
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
      </div>
      <Footer alignContentEvenly={false} sticky={sticky}>
        <Button label="Consent" />
      </Footer>
    </div>
  );
};

export default StudyDataSharing;
