import React from 'react';

import styles from './Portal.module.css';
import AuthButton from './AuthButton';

const Portal = ({ portalType }) => {
  return (
    <div className={styles.portal}>
      <div className={styles.portal__header}>
        <div className={[styles.portal__header__secondary, styles.secondary_color].join(' ')}>Welcome to</div>
        <div className={styles.portal__header__main}>iAGREE</div>
      </div>
      <div className={styles.portal__body}>
        <div className={styles.portal__content}>
          <div className={styles.portal__content__label}>{portalType} portal</div>
          <AuthButton label="Sign in" />
          <AuthButton stroke label="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default Portal;
