import React from 'react';
import { Link } from 'react-router-dom';

import styles from './HomeElement.module.css';

const HomeElement = ({
  label,
  unreadNum = 0,
  link = '/',
  textAlign = 'center',
  fontSize = '1.18rem',
  gridColumns = '1fr 2fr 1fr',
}) => {
  return (
    <Link className={styles.link} to={link}>
      <div className={[styles.home_element, styles.ripple].join(' ')} style={{ gridTemplateColumns: gridColumns }}>
        {unreadNum > 0 ? (
          <div>
            <div className={styles.home_element__badge}>{unreadNum}</div>
          </div>
        ) : (
          <div></div>
        )}
        <div className={[styles.home_element__label, styles.no_select].join(' ')} style={{ textAlign, fontSize }}>
          {label}
        </div>
      </div>
    </Link>
  );
};

export default HomeElement;
