import React from 'react';

import styles from './StudyDataSharingForm.module.css';
import DataSharingElement from './DataSharingElement';

const StudyDataSharingForm = ({ dataElements, requiredElements }) => {
  const content = [];
  for (let element of dataElements) {
    content.push(<DataSharingElement key={element} dataElement={element} required={requiredElements.has(element)} />);
  }
  return (
    <div className={styles.study_data_sharing_form}>
      <div className={styles.study_data_sharing_form__label_container}>
        <span className={[styles.study_data_sharing_form__label, styles.align_left].join(' ')}>Data Requested</span>
        <span className={styles.study_data_sharing_form__label}>Consent to Share</span>
      </div>
      {content}
      <div className={styles.study_data_sharing_form__label_container}>
        <span className={[styles.study_data_sharing_form__label, styles.align_left].join(' ')}>*Required</span>
      </div>
    </div>
  );
};

export default StudyDataSharingForm;
