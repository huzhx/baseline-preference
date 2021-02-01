import React from 'react';

import styles from './SignInVeriEnterCodeForm.module.css';
import TextInput from './TextInput';

const SignInVeriEnterCodeForm = ({ label, handleOnChange }) => {
  return (
    <div className={styles.sign_in_veri_enter_code_form}>
      <div className={styles.sign_in_veri_enter_code_form__label}>{label}</div>
      <div className={styles.sign_in_veri_enter_code_form__input}>
        <TextInput type="number" placeholder="Passcode" handleOnChange={handleOnChange} />
      </div>
      <div className={styles.sign_in_veri_enter_code_form__controller_container}>
        <div className={[styles.sign_in_veri_enter_code_form__controller, styles.ripple, styles.no_select].join(' ')}>
          <span>Send another passcode</span>
        </div>
      </div>
    </div>
  );
};

export default SignInVeriEnterCodeForm;
