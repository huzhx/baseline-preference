import React from 'react';

import styles from './Header.module.css';

const Header = ({ title, highlights, addon }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__main}>
        {title}
        {highlights && <span className={styles['header--highlighted']}> {highlights} </span>}
        {addon}
      </div>
    </div>
  );
};

export default Header;
