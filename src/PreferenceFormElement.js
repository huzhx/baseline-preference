import React from 'react';

import styles from './PreferenceFormElement.module.css';

const PreferenceFormElement = ({ label, options, curCheckedValue, handleChange }) => {
  const radioGroup = [];
  for (let option of options) {
    radioGroup.push(
      <div key={option}>
        <input type="radio" id={option} value={option} checked={option === curCheckedValue} onChange={handleChange} />
        <label htmlFor={option}> {option} </label>
      </div>
    );
  }
  return (
    // <div className={styles.preference_form_element__container}>
    //   <div className={styles.preference_form_element__label}>{label}</div>
    //   <div className={styles.preference_form_element__buttons}>{radioGroup}</div>
    // </div>
    <div>
      <div>{label}</div>
      <div>{radioGroup}</div>
    </div>
  );
};

export default PreferenceFormElement;
