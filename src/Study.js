import React from 'react';

import styles from './Study.module.css';

const Study = ({ institution, title, status, purpose, researchers, dateRequested }) => {
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
      {purpose && (
        <p className={styles.study__content}>
          <span className={styles['study__content--highlighted']}>Purpose:</span>
          <span>{purpose}</span>
        </p>
      )}
      {researchers && (
        <p className={styles.study__content}>
          <span className={styles['study__content--highlighted']}>Researchers:</span>
          <span>{researchers}</span>
        </p>
      )}
      {dateRequested && (
        <p className={styles.study__content}>
          <span className={styles['study__content--highlighted']}>Date Requested:</span>
          <span>{dateRequested}</span>
        </p>
      )}
    </div>
  );
};

export default Study;
