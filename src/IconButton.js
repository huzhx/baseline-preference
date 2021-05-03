import React from 'react';
import { Link } from 'react-router-dom';

import styles from './IconButton.module.css';

const IconButton = ({ label, children, isActive, handleOnClick, flat, link = '/' }) => {
  return (
    <Link className={styles.link} to={link}>
      <div
        className={
          isActive
            ? [styles.icon_button, styles['icon_button--active'], styles.ripple].join(' ')
            : [styles.icon_button, styles.ripple].join(' ')
        }
        onClick={handleOnClick}
      >
        <div className={flat ? [styles.icon_button__layout, styles.flat].join(' ') : styles.icon_button__layout}>
          <div className={styles.icon_button__svg}>{children}</div>
          <div className={[styles.icon_button__label, styles.no_select].join(' ')}>{label}</div>
        </div>
      </div>
    </Link>
  );
};

export default IconButton;
