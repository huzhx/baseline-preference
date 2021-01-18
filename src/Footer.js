import React from 'react';

import styles from './Footer.module.css';

const Footer = ({ children, alignContentEvenly, sticky }) => {
  return (
    <div className={sticky ? [styles.footer, styles['footer--hide']].join(' ') : styles.footer}>
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
