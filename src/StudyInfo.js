import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './StudyInfo.module.css';
import Study from './Study';
import Header from './Header';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import Footer from './Footer';
import IconButton from './IconButton';
import NavBar from './NavBar';

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

  const history = useHistory();
  const goBack = () => history.goBack();
  const goForward = () => history.push('/data-sharing-setting');

  return (
    <div className={styles.study_info}>
      <div className={styles.study_info__nav_bar}>
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
      <div className={styles.study_info__header}>
        <Header title="Study Information" hasGoBack />
      </div>
      <div className={styles['study_info__header--noBackground']}>
        <Header title="Study Information" noBackground />
      </div>
      <div className={styles.study_info__body}>
        <div className={styles.study_info__content}>
          <Study
            institution={studyInfo.institution}
            title={studyInfo.title}
            purpose={studyInfo.purpose}
            researchers={studyInfo.researchers}
            dateRequested={studyInfo.dateRequested}
          />
          <div className={styles.study_info__button_container}>
            <Button label="Back" secondary handleClick={goBack} />
            <Button label="Next" handleClick={goForward} />
          </div>
        </div>
      </div>
      <div className={styles.study_info__footer}>
        <Footer alignContentEvenly={false} sticky={sticky}>
          <Button label="Next" handleClick={goForward} />
        </Footer>
      </div>
    </div>
  );
};

export default StudyInfo;
