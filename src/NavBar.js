import React from 'react';

import styles from './NavBar.module.css';

const NavBar = ({ children, alignStart }) => {
  return (
    <div className={styles.nav_bar}>
      <div
        className={
          alignStart
            ? [styles.footer__content, styles['footer__content--flex-start']].join(' ')
            : styles.footer__content
        }
      >
        {children}
      </div>
    </div>
  );
};

export default NavBar;
