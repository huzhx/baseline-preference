import React from 'react';

import styles from './Radio.module.css';

const Radio = ({ option, checked, handleOnChange }) => {
  return (
    <label className={styles.radio}>
      <input type="radio" id={option} name={option} value={option} checked={checked} onChange={handleOnChange} />
      <span className={styles.overlay}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={styles.icon}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    </label>
  );
};

export default Radio;
