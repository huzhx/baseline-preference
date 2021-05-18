import React from 'react';

import styles from './Text.module.css';

const Text = ({ value }) => {
  return (
    <div data-testid="textContent" className={styles.text__container}>
      <span>{value}</span>
    </div>
  );
};

export default Text;
