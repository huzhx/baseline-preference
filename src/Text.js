import React from 'react';

import styles from './Text.module.css';

const Text = ({ value }) => {
  return (
    <div className={styles.text__container}>
      <span>{value}</span>
    </div>
  );
};

export default Text;
