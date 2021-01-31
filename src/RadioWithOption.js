import React from 'react';

import styles from './RadioWithOption.module.css';
import Radio from './Radio';

const RadioWithOption = ({ option, curCheckedValue, handleOnChange }) => {
  return (
    <div className={styles.radio_with_option}>
      <div className={styles.radio_with_option__option}>{option}</div>
      <div className={styles.radio_with_option__radio}>
        <Radio key={option} option={option} checked={option === curCheckedValue} handleOnChange={handleOnChange} />
      </div>
    </div>
  );
};

export default RadioWithOption;
