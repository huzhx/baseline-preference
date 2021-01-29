import React from 'react';

import styles from './StudyDataSharingForm.module.css';
import DataSharingElement from './DataSharingElement';

const StudyDataSharingForm = ({
  dataElements,
  requiredElements,
  usedElements,
  dataElementsStateMap,
  dataElementsHandleChangeMap,
}) => {
  const content = [];
  for (let element of dataElements) {
    content.push(
      <DataSharingElement
        key={element}
        dataElement={element}
        required={requiredElements.has(element)}
        checked={dataElementsStateMap && dataElementsStateMap.get(element)}
        used={usedElements && usedElements.has(element)}
        onChange={dataElementsHandleChangeMap && dataElementsHandleChangeMap.get(element)}
      />
    );
  }
  return (
    <div className={styles.study_data_sharing_form}>
      <div
        className={
          usedElements
            ? [styles.study_data_sharing_form__label_container, styles.three_columns].join(' ')
            : styles.study_data_sharing_form__label_container
        }
      >
        <span className={[styles.study_data_sharing_form__label, styles.align_left].join(' ')}>Data Requested</span>
        <span className={styles.study_data_sharing_form__label}>Consent to Share</span>
        {usedElements && <span className={styles.study_data_sharing_form__label}>Data Used</span>}
      </div>
      {content}
      <div className={styles.study_data_sharing_form__label_container}>
        <span className={[styles.study_data_sharing_form__label, styles.align_left].join(' ')}>*Required</span>
      </div>
    </div>
  );
};

export default StudyDataSharingForm;
