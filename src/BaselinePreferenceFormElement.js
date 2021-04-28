import React from 'react';

import styles from './BaselinePreferenceFormElement.module.css';
import ReactTooltip from 'react-tooltip';

const BaselinePreferenceFormElement = ({ label, options, curCheckedValue, handleChange, tooltipData }) => {
  const radioGroup = [];
  for (let option of options) {
    radioGroup.push(
      <div key={option}>
        <label
          className={
            option === curCheckedValue
              ? [
                  styles.baseline_preference_form_element__buttons__label,
                  styles['baseline_preference_form_element__buttons__label--checked'],
                  styles.ripple,
                ].join(' ')
              : [styles.baseline_preference_form_element__buttons__label, styles.ripple].join(' ')
          }
        >
          {option}
          <input
            className={styles.baseline_preference_form_element__buttons__input}
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
    <div className={styles.baseline_preference_form_element__container}>
      <div className={styles.baseline_preference_form_element__label}>
        {label}
        {tooltipData && (
          <span
            className={styles.baseline_preference_form_element__label__svg}
            data-tip={`<p>${tooltipData}</p>`}
            data-html={true}
            data-for="label"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <ReactTooltip id="label" />
          </span>
        )}
      </div>
      <div className={styles.baseline_preference_form_element__buttons}>{radioGroup}</div>
    </div>
  );
};

export default BaselinePreferenceFormElement;
