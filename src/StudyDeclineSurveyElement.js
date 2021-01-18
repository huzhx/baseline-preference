import React from 'react';

import styles from './StudyDeclineSurveyElement.module.css';
import Radio from './Radio';

const StudyDeclineSurveyElement = ({ option, curCheckedValue, handleOnChange }) => {
  return (
    <div className={styles.study_survey_element}>
      <div classNam={styles.study_survey_element__option}>{option}</div>
      <div classNam={styles.study_survey_element__radio}>
        <Radio key={option} option={option} checked={option === curCheckedValue} handleOnChange={handleOnChange} />
      </div>
    </div>
  );
};

export default StudyDeclineSurveyElement;
