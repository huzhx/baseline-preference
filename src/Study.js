import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Study.module.css';

const Study = ({ institution, title, status, purpose, researchers, dateRequested, link = '/' }) => {
  return (
    <Link className={styles.link} to={link}>
      <div className={[styles.study, styles.ripple].join(' ')}>
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
    </Link>
  );
};

export default Study;
