import React from 'react';

import styles from './StudyDataSharingForm.module.css';
import DataSharingElement from './DataSharingElement';

const StudyDataSharingForm = ({
  requiredElements,
  usedElements,
  dataElementsStateMap,
  dataElementsHandleChangeMap,
}) => {
  const content = [];
  for (let element of requiredElements) {
    content.push(
      <DataSharingElement
        key={element}
        dataElement={element}
        checked={dataElementsStateMap && dataElementsStateMap.get(element)}
        used={usedElements && usedElements.has(element)}
        onChange={dataElementsHandleChangeMap && dataElementsHandleChangeMap.get(element)}
        viewOnly={usedElements && usedElements.size > 0}
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
        <span className={styles.study_data_sharing_form__label}>Agree to Share</span>
        {usedElements && <span className={styles.study_data_sharing_form__label}>Data Shared</span>}
      </div>
      {content}
    </div>
  );
};

export default StudyDataSharingForm;
