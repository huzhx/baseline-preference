import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './BaselinePreferenceIntro.module.css';
import Text from './Text';
import Button from './Button';
import Header from './Header';
import Footer from './Footer';
import { useScrollPosition } from './UseScrollPosition';
import AppNavBar from './AppNavBar';

const BaselinePreferenceIntro = ({ cb }) => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const introduction =
    'Welcome to iAGREE! You are a first time user. Please set up your data sharing preferences. You can always edit your preferences later.';
  const buttonLabel = 'next';

  const nextPath = cb('intro');
  const history = useHistory();
  const handleClick = () => {
    history.push(nextPath);
  };

  return (
    <div className={styles.baseline_preference_intro}>
      <div className={styles.baseline_preference_intro__nav_bar}>
        <AppNavBar />
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
