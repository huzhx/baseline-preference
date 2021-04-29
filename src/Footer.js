import React from 'react';

import styles from './Footer.module.css';

const Footer = ({ children, alignContentEvenly, sticky, isPrimary }) => {
  return (
    <div
      className={
        sticky
          ? isPrimary
            ? [styles.footer, styles['footer--hide'], styles['footer--primary']].join(' ')
            : [styles.footer, styles['footer--hide']].join(' ')
          : isPrimary
          ? [styles.footer, styles['footer--primary']].join(' ')
          : styles.footer
      }
    >
      <div
        className={
          alignContentEvenly
            ? [styles.footer__content, styles['footer__content--alignEvenly']].join(' ')
            : styles.footer__content
        }
      >
        {children}
      </div>
    </div>
  );
};

export default Footer;
