import React from 'react';

import styles from './DataSharingElement.module.css';
import Checkbox from './Checkbox';
import dataExamples from './models/dataExamples';

const DataSharingElement = ({ dataElement, used, checked, onChange, viewOnly }) => {
  return (
    <div
      className={
        typeof used === 'undefined'
          ? styles.data_sharing_element
          : [styles.data_sharing_element, styles['data_sharing_element--extra-column']].join(' ')
      }
    >
      <div className={styles.data_sharing_element__data_element}>{dataElement}</div>
      <div className={styles.data_sharing_element__data_examples}>{dataExamples[dataElement]}</div>
      <div className={styles.data_sharing_element__checker}>
        {!viewOnly && <Checkbox checked={checked} onChange={onChange} />}
        {viewOnly && <div className={styles.data_sharing_element__label}>{checked ? 'Yes' : 'No'}</div>}
      </div>
      {used && <div className={styles.data_sharing_element__label}>{used ? 'Yes' : 'No'}</div>}
    </div>
  );
};

export default DataSharingElement;
