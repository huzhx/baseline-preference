import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Header.module.css';

const Header = ({ title, highlights, addon, noBackground, hasGoBack, tooltipData }) => {
  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <div className={noBackground ? [styles.header, styles['header--noBackground']].join(' ') : styles.header}>
      <div
        className={
          hasGoBack
            ? [styles.header__back_button_container, styles['header__back_button_container--show']].join(' ')
            : styles.header__back_button_container
        }
      >
        <div className={[styles.header__back_button, styles.ripple].join(' ')} onClick={goBack}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
        </div>
      </div>
      <div className={[styles.header__main, styles.no_select].join(' ')}>
        {title}
        {
          <span className={styles.header__inline_block}>
            {highlights && <span className={styles['header--highlighted']}> {` ${highlights}`} </span>}
            {tooltipData && (
              <span className={[styles['header--highlighted'], styles.header__svg].join(' ')}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </span>
            )}
          </span>
        }
        {addon}
      </div>
    </div>
  );
};

export default Header;
