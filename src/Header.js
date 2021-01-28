import React from 'react';

import styles from './Header.module.css';

const Header = ({ title, highlights, addon, noBackground }) => {
  return (
    <div className={noBackground ? [styles.header, styles['header--noBackground']].join(' ') : styles.header}>
      <div className={styles.header__main}>
        {title}
        {highlights && <span className={styles['header--highlighted']}> {highlights} </span>}
        {addon}
      </div>
    </div>
  );
};

export default Header;
