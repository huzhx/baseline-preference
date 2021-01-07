import React from 'react';

import styles from './BaselinePreferenceIntro.module.css';
import Text from './Text';
import Button from './Button';

const BaselinePreferenceIntro = () => {
  const greeting = 'Hi! Welcome to iAGREE!';
  const introduction =
    'Since you are a first time user, before we get it started, please set up your data sharing preferences. You can always edit your preferences in the future if needed!';
  const buttonLabel = 'next';
  return (
    <div className={styles.baseline_preference_intro__container}>
      <div className={styles.baseline_preference_intro__content_container}>
        <Text value={greeting} />
        <Text value={introduction} />
      </div>
      <div className={styles.baseline_preference_intro__button_container}>
        <Button label={buttonLabel} />
      </div>
    </div>
  );
};

export default BaselinePreferenceIntro;