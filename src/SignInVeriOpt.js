import React, { useState, useEffect } from 'react';

import styles from './SignInVeriOpt.module.css';
import Header from './Header';
import StudyDeclineSurveyElement from './StudyDeclineSurveyElement';
import Footer from './Footer';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';

const SignInVeriOpt = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const question = 'Please select your preferred way to  receive a one time passcode to verify your identity:';
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

  const radioGroup = [];
  for (let option of options) {
    radioGroup.push(
      <StudyDeclineSurveyElement
        key={option}
        option={option}
        curCheckedValue={veriOptState}
        handleOnChange={handleOnChange}
      />
    );
  }

  return (
    <div className={styles.sign_in_veri_opt}>
      <Header title="Your matching" highlights="patient record" addon="has been found!" />
      <div className={styles.sign_in_veri_opt__body}>
        <div className={styles.sign_in_veri_opt__content}>
          <div className={styles.sign_in_veri_opt__question}>{question}</div>
          {radioGroup}
        </div>
      </div>
      <Footer alignContentEvenly={false} sticky={sticky}>
        <Button label="Next" />
      </Footer>
    </div>
  );
};

export default SignInVeriOpt;
