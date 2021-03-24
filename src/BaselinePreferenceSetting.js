import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './BaselinePreferenceSetting.module.css';
import NavBar from './NavBar';
import IconButton from './IconButton';
import Header from './Header';
import Text from './Text';
import { useScrollPosition } from './UseScrollPosition';
import HomeElement from './HomeElement';

const BaselinePreferenceSetting = ({ cb }) => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const intro = 'You have two options below to fill your preferences. Just pick one of them to move forward.';
  const option1 = 'Option1: View seven types of health data.';
  const option2 = 'Option2: View seven types of health organizations.';

  return (
    <div className={styles.baseline_preference_setting}>
      <div className={styles.baseline_preference_setting__nav_bar}>
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
      <div className={styles.baseline_preference_setting__header}>
        <Header title="iAGREE" />
      </div>
      <div className={styles.baseline_preference_setting__body}>
        <div className={styles.baseline_preference_setting__content}>
          <Text value={intro} />
          <div className={styles.baseline_preference_setting__content__options}>
            <div className={styles.baseline_preference_setting__content__option}>
              <HomeElement
                label={option1}
                link="/baseline-preference/v1/1/demographic"
                textAlign="start"
                fontSize="1rem"
                gridColumns="1fr"
              />
            </div>
            <div className={styles.baseline_preference_setting__content__option}>
              <HomeElement
                label={option2}
                link="/baseline-preference/v2/1/a-doctor-office"
                textAlign="start"
                fontSize="1rem"
                gridColumns="1fr"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaselinePreferenceSetting;
