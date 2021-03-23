import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './BaselinePreferenceIntro.module.css';
import Text from './Text';
import Button from './Button';
import Header from './Header';
import Footer from './Footer';
import { useScrollPosition } from './UseScrollPosition';
import NavBar from './NavBar';
import IconButton from './IconButton';

const BaselinePreferenceIntro = ({ cb }) => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const introduction = 'Welcome to iAGREE! You are a first time user. Please set up your data sharing preferences.';
  const buttonLabel = 'next';

  const nextPath = cb('intro');
  const history = useHistory();
  const handleClick = () => {
    history.push(nextPath);
  };

  return (
    <div className={styles.baseline_preference_intro}>
      <div className={styles.baseline_preference_intro__nav_bar}>
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
      <div className={styles.baseline_preference_intro__header}>
        <Header title="iAGREE" />
      </div>
      <div className={styles.baseline_preference_intro__body}>
        <div className={styles.baseline_preference_intro__content}>
          <Text value={introduction} />
          <div className={styles.baseline_preference_intro__button_container}>
            <Button label={buttonLabel} handleClick={handleClick} />
          </div>
        </div>
      </div>
      <div className={styles.baseline_preference_intro__footer}>
        <Footer alignContentEvenly={false} sticky={sticky}>
          <Button label={buttonLabel} handleClick={handleClick} />
        </Footer>
      </div>
    </div>
  );
};

export default BaselinePreferenceIntro;
