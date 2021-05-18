import { useState, useRef } from 'react';

import styles from './NavItem.module.css';
import useOutsideAlerter from './hooks/useOutsideAlerter';

const NavItem = ({ testId, icon, children }) => {
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null);
  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setOpen(false);
    }
  };
  useOutsideAlerter(wrapperRef, handleClickOutside);

  const onclick = () => {
    setOpen(!open);
  };

  return (
    <div testId={testId} className={styles.nav_item__container} ref={wrapperRef}>
      <li className={styles.nav_item}>
        <div
          className={[styles.nav_item__icon_button, styles.ripple].join(' ')}
          onClick={onclick}
          style={{ strokeWidth: 1 }}
        >
          {icon}
        </div>
        {open && children}
      </li>
    </div>
  );
};

export default NavItem;
