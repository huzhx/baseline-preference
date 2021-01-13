import React from 'react';

import styles from './Study.module.css';

const Study = ({ institution, title, status }) => {
  return (
    <div className={styles.study}>
      <p className={styles.study__content}>
        <span className={styles['study__content--highlighted']}>Institution:</span>
        <span>{institution}</span>
      </p>
      <p className={styles.study__content}>
        <span className={styles['study__content--highlighted']}>Study Title:</span>
        <span>{title}</span>
      </p>
      {status && (
        <p className={styles.study__content}>
          <span className={styles['study__content--highlighted']}>Status:</span>
          <span>{status}</span>
        </p>
      )}
    </div>
  );
};

export default Study;
