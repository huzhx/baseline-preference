import React, { useState, useEffect } from 'react';

import styles from './SignInVeriOpt.module.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import IconButton from './IconButton';
import NavBar from './NavBar';
import SignInVeriOptForm from './SignInVeriOptForm';

const SignInVeriOpt = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const question = 'Please select your preferred way to receive a one time passcode to verify your identity:';
  const options = [
    'a. Send a text message to xxx-xxx-xxxx',
    'b. Call xxx-xxx-xxxx',
    'c. Send an email to xxx@mail.com',
  ];

  const [veriOptState, setVeriOptState] = useState(null);
  const handleOnChange = (event) => {
    setVeriOptState(event.target.value);
  };

  useEffect(() => {
    console.log(veriOptState);
  }, [veriOptState]);

  return (
    <div className={styles.sign_in_veri_opt}>
      <div className={styles.sign_in_veri_opt__nav_bar}>
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
      <div className={styles.sign_in_veri_opt__header}>
        <Header title="Your matching" highlights="patient record" addon="has been found!" />
      </div>
      <div className={styles['sign_in_veri_opt__header--noBackground']}>
        <Header title="Your matching" highlights="patient record" addon="has been found!" noBackground />
      </div>
      <div className={styles.sign_in_veri_opt__body}>
        <div className={styles.sign_in_veri_opt__content}>
          <SignInVeriOptForm
            question={question}
            options={options}
            veriOptState={veriOptState}
            handleOnChange={handleOnChange}
          />
          <div className={styles.sign_in_veri_opt__button_container}>
            <Button label="Next" />
          </div>
        </div>
      </div>
      <div className={styles.sign_in_veri_opt__footer}>
        <Footer alignContentEvenly={false} sticky={sticky}>
          <Button label="Next" />
        </Footer>
      </div>
    </div>
  );
};

export default SignInVeriOpt;
