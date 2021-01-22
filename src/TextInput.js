import React from 'react';

import styles from './TextInput.module.css';

const TextInput = ({ label, type, placeholder, handleOnChange }) => {
  return (
    <div className={styles.text_input}>
      <label className={styles.text_input__label} htmlFor="input">
        {label}
      </label>
      <input className={styles.input} type={type} placeholder={placeholder} onChange={handleOnChange} />
    </div>
  );
};

export default TextInput;
