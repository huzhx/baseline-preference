import React from 'react';

import styles from './DataSharingElement.module.css';
import Checkbox from './Checkbox';

const DataSharingElement = ({ dataElement, required, used, checked, onChange }) => {
  return (
    <div
      className={
        typeof used === 'undefined'
          ? styles.data_sharing_element
          : [styles.data_sharing_element, styles['data_sharing_element--extra-column']].join(' ')
      }
    >
      <div className={styles.data_sharing_element__data_element}>
        {dataElement}
        {required && <span className={styles['data_sharing_element__data_element--required']}>*</span>}
      </div>
      <div className={styles.data_sharing_element__checker}>
        <Checkbox checked={checked} onChange={onChange} />
      </div>
      {used && <div className={styles.data_sharing_element__label}>{used ? 'True' : 'False'}</div>}
    </div>
  );
};

export default DataSharingElement;
