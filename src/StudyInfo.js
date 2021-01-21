import React, { useState } from 'react';

import styles from './StudyInfo.module.css';
import Study from './Study';
import Header from './Header';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import Footer from './Footer';

const StudyInfo = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const studyInfo = {
    institution: 'University of California San Diego',
    title: 'Clinic visits for patients with uncontrolled diabetes by demographic characteristics',
    purpose: 'Are there differences in clinic visits for people with diabetes by gender identity, race, and ethnicity?',
    researchers: 'Helen Smith',
    dateRequested: '10/28/2020',
  };
  return (
    <div className={styles.study_info}>
      <Header title="Study Information" />
      <div className={styles.study_info__body}>
        <div className={styles.study_info__content}>
          <Study
            institution={studyInfo.institution}
            title={studyInfo.title}
            purpose={studyInfo.purpose}
            researchers={studyInfo.researchers}
            dateRequested={studyInfo.dateRequested}
          />
        </div>
      </div>
      <Footer alignContentEvenly={false} sticky={sticky}>
        <Button label="Next" />
      </Footer>
    </div>
  );
};

export default StudyInfo;
