import React from 'react';

import styles from './DataSharingElement.module.css';
import Checkbox from './Checkbox';

const DataSharingElement = ({ dataElement, isRequired, isConsented, isUsed }) => {
  return (
    <div
      className={
        typeof isUsed === 'undefined'
          ? styles.data_sharing_element
          : [styles.data_sharing_element, styles['data_sharing_element--extra-column']].join(' ')
      }
    >
      <div className={styles.data_sharing_element__data_element}>
        {dataElement}
        {isRequired && <span className={styles['data_sharing_element__data_element--required']}>*</span>}
      </div>
      <div className={styles.data_sharing_element__checker}>
        <Checkbox checked={isConsented && isConsented.has(dataElement)} />
      </div>
      {isUsed && <div className={styles.data_sharing_element__label}>{isUsed.has(dataElement) ? 'True' : 'False'}</div>}
    </div>
  );
};

export default DataSharingElement;
