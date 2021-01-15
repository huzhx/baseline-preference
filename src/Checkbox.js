import React from 'react';

import styles from './Checkbox.module.css';

const Checkbox = ({ checked, handleOnChange }) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" checked={checked} onChange={handleOnChange} />
      <span className={styles.overlay}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className={styles.icon}
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
    </label>
  );
};

export default Checkbox;
