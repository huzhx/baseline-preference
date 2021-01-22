import React, { useState, useEffect } from 'react';

import styles from './SignInVeriEnterCode.module.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
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
      <Header title="Your matching" highlights="patient record" addon="has been found!" />
      <div className={styles.sign_in_veri_enter_code__body}>
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
      </div>
      <Footer alignContentEvenly={false} sticky={sticky}>
        <Button label="Submit" />
      </Footer>
    </div>
  );
};

export default SignInVeriEnterCode;
