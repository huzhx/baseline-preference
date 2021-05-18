import React from 'react';

import styles from './Study.module.css';

const Study = ({
  institution,
  sponsor,
  title,
  purpose,
  principleInvestigator,
  irbContent,
  irbApprovalDate,
  irbApprovedBy,
  additionalInfoURL,
  status,
  sharedElements,
}) => {
  return (
    <div className={styles.study}>
      <p className={styles.study__content}>
        <span className={styles['study__content--highlighted']}>Institution:</span>
        <span>{institution}</span>
      </p>
      {sponsor && (
        <p className={styles.study__content}>
          <span className={styles['study__content--highlighted']}>Sponsor:</span>
          <span>{sponsor}</span>
        </p>
      )}
      <p className={styles.study__content}>
        <span className={styles['study__content--highlighted']}>Study Title:</span>
        <span>{title}</span>
      </p>
      {status && (
        <p className={styles.study__content}>
          <span className={styles['study__content--highlighted']}>Status:</span>
          <span>{status}</span>
        </p>
      )}
      {sharedElements && (
        <p className={styles.study__content}>
          <span className={styles['study__content--highlighted']}>Shared Data Elements:</span>
          <span>{sharedElements}</span>
        </p>
      )}
      {purpose && (
        <p className={styles.study__content}>
          <span className={styles['study__content--highlighted']}>Purpose:</span>
          <span>{purpose}</span>
        </p>
      )}
      {principleInvestigator && (
        <p className={styles.study__content}>
          <span className={styles['study__content--highlighted']}>Principle Investigator:</span>
          <span>{principleInvestigator}</span>
        </p>
      )}
      {irbContent && (
        <p className={styles.study__content}>
          <span className={styles['study__content--highlighted']}>Institutional Review Board:</span>
          <span>
            {irbContent} This IRB was approved on {irbApprovalDate}. This IRB was approved by {irbApprovedBy}.
          </span>
        </p>
      )}
      {additionalInfoURL && (
        <p className={styles.study__content}>
          <span className={styles['study__content--highlighted']}>Additional Information:</span>
          <a className={styles.left} href={additionalInfoURL} target="_blank" rel="noreferrer">
            {additionalInfoURL}
          </a>
        </p>
      )}
    </div>
  );
};

export default Study;
