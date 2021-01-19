import React from 'react';

import styles from './Textarea.module.css';

const Textarea = ({ label, placeholder, handleOnChange, curValue, rows }) => {
  return (
    <div className={styles.textarea}>
      <label htmlFor="textarea">{label}</label>
      <textarea className={styles.input} id="textarea" placeholder={placeholder} onChange={handleOnChange} rows={rows}>
        {curValue}
      </textarea>
    </div>
  );
};

export default Textarea;
