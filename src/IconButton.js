import React from 'react';

import styles from './IconButton.module.css';

const IconButton = ({ label, children, isActive, handleOnClick, flat }) => {
  return (
    <div
      className={
        isActive
          ? [styles.icon_button, styles['icon_button--active'], styles.ripple].join(' ')
          : [styles.icon_button, styles.ripple].join(' ')
      }
      onClick={handleOnClick}
    >
      <div className={flat ? [styles.icon_button__layout, styles.flat].join(' ') : styles.icon_button__layout}>
        <span className={styles.icon_button__svg}>{children}</span>
        <div className={[styles.icon_button__label, styles.no_select].join(' ')}>{label}</div>
      </div>
    </div>
  );
};

export default IconButton;
