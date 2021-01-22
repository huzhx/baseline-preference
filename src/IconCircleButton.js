import React from 'react';

import styles from './IconCircleButton.module.css';

const IconCircleButton = ({ children }) => {
  return <div className={[styles.icon_circle_button, styles.ripple].join(' ')}>{children}</div>;
};

export default IconCircleButton;
