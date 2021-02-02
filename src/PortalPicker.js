import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './PortalPicker.module.css';
import AuthButton from './AuthButton';

const PortalPicker = () => {
  const history = useHistory();
  const goForward = (path) => history.push(path);

  return (
    <div className={styles.portal_picker}>
      <div className={styles.portal_picker__header}>
        <div className={styles.portal_picker__header__back_button_container}>
          <div className={[styles.portal_picker__header__back_button, styles.ripple].join(' ')}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </div>
        </div>
        <div className={[styles.portal_picker__header__secondary, styles.secondary_color].join(' ')}>Welcome to</div>
        <div className={styles.portal_picker__header__main}>iAGREE</div>
      </div>
      <div className={styles.portal_picker__background}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
            className={styles['shape-fill']}
          ></path>
        </svg>
      </div>

      <div className={styles.portal_picker__body}>
        <div className={styles.portal_picker__content}>
          <div className={styles.portal_picker__content__label}>Please choose your portal</div>
          <AuthButton label="Patient Portal" handleClick={() => goForward('/portal/patient')} />
          <AuthButton stroke label="Provider Portal" handleClick={() => goForward('/portal/provider')} />
        </div>
      </div>
    </div>
  );
};

export default PortalPicker;
