import React from 'react';

import styles from './StudyDeclineSurveyForm.module.css';
import StudyDeclineSurveyElement from './StudyDeclineSurveyElement';
import Textarea from './Textarea';

const StudyDeclineSurveyForm = ({
  question,
  options,
  declineState,
  handleDeclineChange,
  ifOtherSelectedState,
  handleCommentChange,
  commentState,
}) => {
  const radioGroup = [];
  for (let option of options) {
    radioGroup.push(
      <StudyDeclineSurveyElement
        key={option}
        option={option}
        curCheckedValue={declineState}
        handleOnChange={handleDeclineChange}
      />
    );
  }
  return (
    <div className={styles.study_decline_survey_form}>
      <div className={styles.study_decline_survey_form__question}>{question}</div>
      {radioGroup}
      <div
        className={
          ifOtherSelectedState
            ? styles.study_decline_survey_form__comment
            : [styles.study_decline_survey_form__comment, styles['study_decline_survey_form__comment--hidden']].join(
                ' '
              )
        }
      >
        <Textarea placeholder="Please specify" onChange={handleCommentChange} value={commentState} />
      </div>
    </div>
  );
};

export default StudyDeclineSurveyForm;
