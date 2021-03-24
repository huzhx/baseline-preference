import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './StudyDataSharingReview.module.css';
import StudyDataSharingForm from './StudyDataSharingForm';
import Header from './Header';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import Footer from './Footer';
import IconButton from './IconButton';
import NavBar from './NavBar';

const StudyDataSharingReview = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const description =
    'Below are data elements requested by the study. Your  submitted sharing preferences and data usage status for this study have been loaded. The results are read-only.';

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

  function anyRequirementNotMet() {
    for (let requiredElement of requiredElements) {
      const selectedState = dataElementsStateMap.get(requiredElement);
      if (selectedState === false) {
        return true;
      }
    }
    return false;
  }

  const history = useHistory();
  const goBack = () => history.goBack();

  const handleOnSubmit = () => {
    let path = '/';
    if (anyRequirementNotMet()) {
      path = '/decline-survey';
    }
    history.push(path);
  };

  return (
    <div className={styles.study_data_sharing_review}>
      <div className={styles.study_data_sharing_review__nav_bar}>
        <NavBar>
          <IconButton label="iAgree" flat>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
          </IconButton>
          <IconButton label="My profile" flat>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </IconButton>
        </NavBar>
      </div>
      <div className={styles.study_data_sharing_review__header}>
        <Header title="Data Sharing" hasGoBack />
      </div>
      <div className={styles['study_data_sharing_review__header--noBackground']}>
        <Header title="Data Sharing" noBackground />
      </div>
      <div className={styles.study_data_sharing_review__body}>
        <div className={styles.study_data_sharing_review__content}>
          <div className={styles.study_data_sharing_review__content__description}>{description}</div>
          <StudyDataSharingForm
            dataElements={dataElements}
            requiredElements={requiredElements}
            usedElements={usedElements}
            dataElementsStateMap={dataElementsStateMap}
            dataElementsHandleChangeMap={dataElementsHandleChangeMap}
          />
          <div className={styles.study_data_sharing_review__button_container}>
            <Button label="Back" secondary handleClick={goBack} />
            <Button label="Next" handleClick={handleOnSubmit} />
          </div>
        </div>
      </div>
      <div className={styles.study_data_sharing_review__footer}>
        <Footer alignContentEvenly={false} sticky={sticky}>
          <Button label="Next" handleClick={handleOnSubmit} />
        </Footer>
      </div>
    </div>
  );
};

export default StudyDataSharingReview;
