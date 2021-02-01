import React from 'react';

import styles from './SignInVeriOptForm.module.css';
import RadioWithOption from './RadioWithOption';

const SignInVeriOptForm = ({ question, options, veriOptState, handleOnChange }) => {
  const radioGroup = [];
  for (let option of options) {
    radioGroup.push(
      <RadioWithOption key={option} option={option} curCheckedValue={veriOptState} handleOnChange={handleOnChange} />
    );
  }
  return (
    <div className={styles.sign_in_veri_opt_form}>
      <div className={styles.sign_in_veri_opt_form__question}>{question}</div>
      {radioGroup}
    </div>
  );
};

export default SignInVeriOptForm;
