import React from 'react';

import styles from './IconCircleButton.module.css';

const IconCircleButton = ({ children, handleClick }) => {
  return (
    <div className={[styles.icon_circle_button, styles.ripple].join(' ')} onClick={handleClick}>
      {children}
    </div>
  );
};

export default IconCircleButton;
