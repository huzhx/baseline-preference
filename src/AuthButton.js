import React from 'react';

import styles from './AuthButton.module.css';

const AuthButton = ({ stroke, label, handleClick }) => {
  return (
    <button
      className={
        stroke
          ? [styles.auth_button, styles['auth_button--stroke'], styles.ripple].join(' ')
          : [styles.auth_button, styles.ripple].join(' ')
      }
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default AuthButton;
