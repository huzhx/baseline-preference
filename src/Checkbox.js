import React from 'react';

import styles from './Checkbox.module.css';

const Checkbox = ({ checked, onChange }) => {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" checked={checked} onChange={onChange} />
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

export default Checkbox;
