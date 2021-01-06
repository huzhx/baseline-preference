import React from 'react';

import styles from './PreferenceFormElement.module.css';

const PreferenceFormElement = ({ label, options, curCheckedValue, handleChange }) => {
  const radioGroup = [];
  for (let option of options) {
    radioGroup.push(
      <div key={option}>
        <label
          className={
            option === curCheckedValue
              ? [
                  styles.preference_form_element__buttons__label,
                  styles['preference_form_element__buttons__label--checked'],
                ].join(' ')
              : styles.preference_form_element__buttons__label
          }
        >
          {option}
          <input
            className={styles.preference_form_element__buttons__input}
            type="radio"
            id={option}
            value={option}
            checked={option === curCheckedValue}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  }
  return (
    <div className={styles.preference_form_element__container}>
      <div className={styles.preference_form_element__label}>{label}</div>
      <div className={styles.preference_form_element__buttons}>{radioGroup}</div>
    </div>
  );
};

export default PreferenceFormElement;
