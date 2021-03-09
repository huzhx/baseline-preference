import React from 'react';

import styles from './StudyDeclineSurveyForm.module.css';
import RadioWithOption from './RadioWithOption';
import Textarea from './Textarea';

const StudyDeclineSurveyForm = ({
  declinedElement,
  declineState,
  handleDeclineChange,
  commentState,
  handleCommentChange,
}) => {
  const options = [
    'a. I am concerned about the security of the information I provided',
    'b. I am not interested in this topic',
    'c. Other',
    'd. Decline to answer',
  ];

  const radioGroup = [];
  for (let option of options) {
    radioGroup.push(
      <RadioWithOption
        key={option}
        option={option}
        curCheckedValue={declineState}
        handleOnChange={handleDeclineChange}
      />
    );
  }
  return (
    <div className={styles.study_decline_survey_form}>
      <div className={styles.study_decline_survey_form__question}>
        We noticed that you declined to share
        <span className={styles['study_decline_survey_form__question--highlighted']}> {declinedElement}</span> data with
        us for this study. Could you please tell us why?
      </div>
      {radioGroup}
      <div className={styles.study_decline_survey_form__comment}>
        <Textarea placeholder="Any additional information" onChange={handleCommentChange} value={commentState} />
      </div>
    </div>
  );
};

export default StudyDeclineSurveyForm;
