import React, { useState, useEffect } from 'react';

import styles from './StudyDataSharingReview.module.css';
import DataSharingElement from './DataSharingElement';
import Header from './Header';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import Footer from './Footer';

const StudyDataSharingReview = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const dataElements = [
    'demographic',
    'general clinical',
    'biospecimen',
    'genetic',
    'mental health',
    'sexual and reproductive health',
    'family history',
  ];

  const requiredElements = new Set();
  requiredElements.add('demographic');
  requiredElements.add('biospecimen');
  requiredElements.add('genetic');
  requiredElements.add('family history');

  const consentedElements = new Set();
  consentedElements.add('demographic');
  consentedElements.add('biospecimen');
  consentedElements.add('genetic');
  consentedElements.add('sexual and reproductive health');
  consentedElements.add('family history');

  const usedElements = new Set();
  usedElements.add('biospecimen');
  usedElements.add('genetic');
  usedElements.add('family history');

  const [demographicState, setDemographicState] = useState(consentedElements.has('demographic'));
  const [generalClinicalState, setGeneralClinicalState] = useState(consentedElements.has('general clinical'));
  const [biospecimenState, setBiospecimenState] = useState(consentedElements.has('biospecimen'));
  const [geneticState, setGeneticState] = useState(consentedElements.has('genetic'));
  const [mentalHealthState, setMentalHealthState] = useState(consentedElements.has('mental health'));
  const [sexAndRepState, setSexAndRepState] = useState(consentedElements.has('sexual and reproductive health'));
  const [familyHistoryState, setFamilyHistoryState] = useState(consentedElements.has('family history'));

  const handleDemographicChange = (event) => {
    setDemographicState(event.target.checked);
  };
  const handleGeneralClinicalChange = (event) => {
    setGeneralClinicalState(event.target.checked);
  };
  const handleBiospecimenChange = (event) => {
    setBiospecimenState(event.target.checked);
  };
  const handleGeneticChange = (event) => {
    setGeneticState(event.target.checked);
  };
  const handleMentalHealthChange = (event) => {
    setMentalHealthState(event.target.checked);
  };
  const handleSexAndRepChange = (event) => {
    setSexAndRepState(event.target.checked);
  };
  const handleFamilyHistoryChange = (event) => {
    setFamilyHistoryState(event.target.checked);
  };

  const dataElementsStateMap = new Map();
  const dataElementsHandleChangeMap = new Map();

  dataElementsStateMap.set(dataElements[0], demographicState);
  dataElementsStateMap.set(dataElements[1], generalClinicalState);
  dataElementsStateMap.set(dataElements[2], biospecimenState);
  dataElementsStateMap.set(dataElements[3], geneticState);
  dataElementsStateMap.set(dataElements[4], mentalHealthState);
  dataElementsStateMap.set(dataElements[5], sexAndRepState);
  dataElementsStateMap.set(dataElements[6], familyHistoryState);

  dataElementsHandleChangeMap.set(dataElements[0], handleDemographicChange);
  dataElementsHandleChangeMap.set(dataElements[1], handleGeneralClinicalChange);
  dataElementsHandleChangeMap.set(dataElements[2], handleBiospecimenChange);
  dataElementsHandleChangeMap.set(dataElements[3], handleGeneticChange);
  dataElementsHandleChangeMap.set(dataElements[4], handleMentalHealthChange);
  dataElementsHandleChangeMap.set(dataElements[5], handleSexAndRepChange);
  dataElementsHandleChangeMap.set(dataElements[6], handleFamilyHistoryChange);

  useEffect(() => {
    console.log({
      demographicState,
      generalClinicalState,
      biospecimenState,
      geneticState,
      mentalHealthState,
      sexAndRepState,
      familyHistoryState,
    });
  }, [
    demographicState,
    generalClinicalState,
    biospecimenState,
    geneticState,
    mentalHealthState,
    sexAndRepState,
    familyHistoryState,
  ]);

  const content = [];
  for (let element of dataElements) {
    content.push(
      <DataSharingElement
        key={element}
        dataElement={element}
        required={requiredElements.has(element)}
        checked={dataElementsStateMap.get(element)}
        used={usedElements.has(element)}
        onChange={dataElementsHandleChangeMap.get(element)}
      />
    );
  }

  return (
    <div className={styles.study_data_sharing_review}>
      <Header title="Data Sharing" />
      <div className={styles.study_data_sharing_review__body}>
        <div className={styles.study_data_sharing_review__content}>
          <div className={styles.study_data_sharing_review__label_container}>
            <span className={[styles.study_data_sharing_review__label, styles.align_left].join(' ')}>
              Data Requested
            </span>
            <span className={styles.study_data_sharing_review__label}>Data Shared</span>
            <span className={styles.study_data_sharing_review__label}>Data Used</span>
          </div>
          {content}
          <div className={styles.study_data_sharing_review__label_container}>
            <span className={[styles.study_data_sharing_review__label, styles.align_left].join(' ')}>*Required</span>
          </div>
        </div>
      </div>
      <Footer alignContentEvenly={false} sticky={sticky}>
        <Button label="Submit" />
      </Footer>
    </div>
  );
};

export default StudyDataSharingReview;
