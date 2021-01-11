import React from 'react';

import styles from './Button.module.css';

const Button = ({ label, handleClick }) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {label}
    </button>
  );
};

export default Button;
