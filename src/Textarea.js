import React, { useRef, useEffect } from 'react';

import styles from './Textarea.module.css';

const Textarea = ({ label, placeholder, onChange, value, rows }) => {
  const textarea = useRef(null);

  useEffect(() => {
    textarea.current.focus();
    console.log(textarea.current.scrollHeight);
    if (value.trim() === '') {
      textarea.current.rows = 2;
    } else {
      textarea.current.rows = textarea.current.scrollHeight / 35;
      if (textarea.current.rows < 2) {
        textarea.current.rows = 2;
      }
    }
  }, [value]);

  return (
    <div className={styles.textarea}>
      <label htmlFor="textarea">{label}</label>
      <textarea
        ref={textarea}
        className={styles.input}
        id="textarea"
        placeholder={placeholder}
        onChange={onChange}
        rows={rows}
        value={value}
      />
    </div>
  );
};

export default Textarea;
