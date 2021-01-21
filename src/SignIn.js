import React from 'react';

import styles from './SignIn.module.css';
import AuthButton from './AuthButton';

const SignIn = ({ portalType }) => {
  return (
    <div className={styles.sign_in}>
      <div className={styles.sign_in__header}>
        <div className={[styles.sign_in__header__secondary, styles.secondary_color].join(' ')}>Welcome to</div>
        <div className={styles.sign_in__header__main}>iAGREE</div>
      </div>
      <div className={styles.sign_in__body}>
        <div className={styles.sign_in__content}>
          <div className={styles.sign_in__content__label}>{portalType} portal</div>
          <AuthButton label="Sign in" />
          <AuthButton stroke label="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
