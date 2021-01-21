import React from 'react';

import styles from './PortalPicker.module.css';
import AuthButton from './AuthButton';

const PortalPicker = () => {
  return (
    <div className={styles.portal_picker}>
      <div className={styles.portal_picker__header}>
        <div className={[styles.portal_picker__header__secondary, styles.secondary_color].join(' ')}>Welcome to</div>
        <div className={styles.portal_picker__header__main}>iAGREE</div>
      </div>
      <div className={styles.portal_picker__body}>
        <div className={styles.portal_picker__content}>
          <div className={styles.portal_picker__content__label}>Please choose your portal</div>
          <AuthButton label="Patient Portal" />
          <AuthButton stroke label="Provider Portal" />
        </div>
      </div>
    </div>
  );
};

export default PortalPicker;
