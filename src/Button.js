import React from 'react';

import styles from './Button.module.css';

const Button = ({ label, handleClick, secondary }) => {
  return (
    <button
      className={
        secondary
          ? [styles.button, styles.ripple, styles['button--secondary']].join(' ')
          : [styles.button, styles.ripple].join(' ')
      }
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
