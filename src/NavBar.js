import React from 'react';

import styles from './NavBar.module.css';
import IconButton from './IconButton';
import { MdHome } from 'react-icons/md';

const NavBar = ({ children }) => {
  return (
    <nav className={styles.nav_bar}>
      <div className={styles.nav_bar__content}>
        <div className={styles.nav_bar__home}>
          <IconButton label="iAgree" flat link="/">
            <MdHome />
          </IconButton>
        </div>
        <ul className={styles.nav_bar__items}>{children}</ul>
      </div>
    </nav>
  );
};

export default NavBar;
