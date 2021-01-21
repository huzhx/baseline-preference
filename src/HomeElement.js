import React from 'react';

import styles from './HomeElement.module.css';

const HomeElement = ({ label, unreadNum = 0 }) => {
  return (
    <div className={[styles.home_element, styles.ripple].join(' ')}>
      {unreadNum > 0 ? (
        <div>
          <div className={styles.home_element__badge}>{unreadNum}</div>
        </div>
      ) : (
        <div></div>
      )}
      <div className={styles.home_element__label}>{label}</div>
    </div>
  );
};

export default HomeElement;
