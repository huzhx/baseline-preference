import React from 'react';

import styles from './NavBar.module.css';

const NavBar = ({ children }) => {
  return (
    <div className={styles.nav_bar}>
      <div className={styles.footer__content}>{children}</div>
    </div>
  );
};

export default NavBar;
