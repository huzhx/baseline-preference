import React from 'react';

import styles from './IconButton.module.css';

const IconButton = ({ label, children, isActive, handleOnClick }) => {
  return (
    <div
      className={
        isActive
          ? [styles.icon_button, styles['icon_button--active'], styles.ripple].join(' ')
          : [styles.icon_button, styles.ripple].join(' ')
      }
      onClick={handleOnClick}
    >
      <span>{children}</span>
      <div className={styles.icon_button__label}>{label}</div>
    </div>
  );
};

export default IconButton;
