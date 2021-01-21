import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './BaselinePreferenceIntro.module.css';
import Text from './Text';
import Button from './Button';
import Header from './Header';
import Footer from './Footer';
import { useScrollPosition } from './UseScrollPosition';

const BaselinePreferenceIntro = ({ cb }) => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const greeting = 'Hi! Welcome to iAGREE!';
  const introduction =
    'Since you are a first time user, before we get it started, please set up your data sharing preferences. You can always edit your preferences in the future if needed!';
  const buttonLabel = 'next';

  const nextPath = cb('intro');
  const history = useHistory();
  const handleClick = () => {
    history.push(nextPath);
  };

  return (
    <div className={styles.baseline_preference_intro}>
      <Header title="iAGREE" />
      <div className={styles.baseline_preference_intro__body}>
        <div className={styles.baseline_preference_intro__content}>
          <Text value={greeting} />
          <Text value={introduction} />
        </div>
      </div>
      <Footer alignContentEvenly={false} sticky={sticky}>
        <Button label={buttonLabel} handleClick={handleClick} />
      </Footer>
    </div>
  );
};

export default BaselinePreferenceIntro;
