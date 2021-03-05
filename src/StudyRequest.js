import React from 'react';

import styles from './StudyRequest.module.css';
import Study from './Study';
import Button from './Button';

const StudyRequest = ({ studyInfo, buttonLabel, buttonHandler }) => {
  return (
    <div className={styles.study_request}>
      <Study
        key={studyInfo.title}
        institution={studyInfo.institution}
        title={studyInfo.title}
        status={studyInfo.status}
      />
      <div className={styles.study_request__button_container}>
        <Button label={buttonLabel} handleClick={buttonHandler} />
      </div>
    </div>
  );
};

export default StudyRequest;
