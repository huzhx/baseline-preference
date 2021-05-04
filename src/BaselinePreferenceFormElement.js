import React from 'react';

import styles from './BaselinePreferenceFormElement.module.css';
import ReactTooltip from 'react-tooltip';
import { MdHelpOutline } from 'react-icons/md';

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
          <div
            className={styles.baseline_preference_form_element__label__svg}
            data-tip={`<p>${tooltipData}</p>`}
            data-html={true}
            data-for="label"
          >
            <MdHelpOutline />
            <ReactTooltip id="label" />
          </div>
        )}
      </div>
      <div className={styles.baseline_preference_form_element__buttons}>{radioGroup}</div>
    </div>
  );
};

export default BaselinePreferenceFormElement;
