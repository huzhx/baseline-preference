import React from 'react';

import styles from './SetUpPreference.module.css';
import Text from './Text';

const SetUpPreference = () => {
  const greeting = 'Hi! Welcome to iAGREE!';
  const introduction =
    'Since you are a first time user, before we get it started, please set up your data sharing preferences, you can always edit your preferences in the future if needed!';
  return (
    <div className={styles.setup_preference__container}>
      <Text value={greeting} />
      <Text value={introduction} />
    </div>
  );
};

export default SetUpPreference;
