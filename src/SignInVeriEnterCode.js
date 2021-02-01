import React, { useState, useEffect } from 'react';

import styles from './SignInVeriEnterCode.module.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import IconButton from './IconButton';
import NavBar from './NavBar';
import TextInput from './TextInput';

const SignInVeriEnterCode = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const [passcodeState, setPasscodeState] = useState('');
  const handleOnChange = (event) => {
    setPasscodeState(event.target.value);
  };

  useEffect(() => {
    console.log(passcodeState);
  }, [passcodeState]);

  const label = 'Please enter the 7-digit one-time passcode you received:';

  return (
    <div className={styles.sign_in_veri_enter_code}>
      <div className={styles.sign_in_veri_enter_code__nav_bar}>
        <NavBar>
          <IconButton label="iAgree" flat>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </IconButton>
          <IconButton label="My profile" flat>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </IconButton>
        </NavBar>
      </div>
      <div className={styles.sign_in_veri_enter_code__header}>
        <Header title="Your matching" highlights="patient record" addon="has been found!" />
      </div>
      <div className={styles['sign_in_veri_enter_code__header--noBackground']}>
        <Header title="Your matching" highlights="patient record" addon="has been found!" noBackground />
      </div>
      <div className={styles.sign_in_veri_enter_code__body}>
        <div className={styles.sign_in_veri_enter_code__content}>
          <div className={styles.sign_in_veri_enter_code__form}>
            <div className={styles.sign_in_veri_enter_code__label}>{label}</div>
            <div className={styles.sign_in_veri_enter_code__input}>
              <TextInput type="number" placeholder="Passcode" handleOnChange={handleOnChange} />
            </div>
            <div className={styles.sign_in_veri_enter_code__controller_container}>
              <div className={[styles.sign_in_veri_enter_code__controller, styles.ripple, styles.no_select].join(' ')}>
                <span>Send another passcode</span>
              </div>
            </div>
          </div>
          <div className={styles.sign_in_veri_enter_code__button_container}>
            <Button label="Submit" />
          </div>
        </div>
      </div>
      <div className={styles.sign_in_veri_enter_code__footer}>
        <Footer alignContentEvenly={false} sticky={sticky}>
          <Button label="Submit" />
        </Footer>
      </div>
    </div>
  );
};

export default SignInVeriEnterCode;
