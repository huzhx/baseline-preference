import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './StudyDataSharing.module.css';
import StudyDataSharingForm from './StudyDataSharingForm';
import Header from './Header';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import Footer from './Footer';
import IconButton from './IconButton';
import NavBar from './NavBar';

const StudyDataSharing = () => {
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

  const baselinePreference = {};
  baselinePreference['demographic'] = true;
  baselinePreference['generalClinical'] = false;
  baselinePreference['biospecimen'] = true;
  baselinePreference['genetic'] = false;
  baselinePreference['mentalHealth'] = false;
  baselinePreference['sexAndRep'] = true;
  baselinePreference['familyHistory'] = true;

  const [demographicState, setDemographicState] = useState(baselinePreference['demographic']);
  const [generalClinicalState, setGeneralClinicalState] = useState(baselinePreference['generalClinical']);
  const [biospecimenState, setBiospecimenState] = useState(baselinePreference['biospecimen']);
  const [geneticState, setGeneticState] = useState(baselinePreference['genetic']);
  const [mentalHealthState, setMentalHealthState] = useState(baselinePreference['mentalHealth']);
  const [sexAndRepState, setSexAndRepState] = useState(baselinePreference['sexAndRep']);
  const [familyHistoryState, setFamilyHistoryState] = useState(baselinePreference['familyHistory']);

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

  function getDeclinedElements() {
    const declinedElements = [];
    for (let requiredElement of requiredElements) {
      const selectedState = dataElementsStateMap.get(requiredElement);
      if (selectedState === false) {
        declinedElements.push(requiredElement);
      }
    }
    return declinedElements;
  }

  function getDeclineSurveyPaths(declinedElements) {
    const pathMap = {};
    for (let i = 0; i < declinedElements.length; i++) {
      const declinedElement = declinedElements[i];
      pathMap[declinedElement] = {};
      if (i === declinedElements.length - 1) {
        pathMap[declinedElement]['nextPath'] = '/';
      } else {
        pathMap[declinedElement]['nextPath'] = `/decline-survey/${declinedElements[i + 1]}`;
      }
    }
    return pathMap;
  }

  const history = useHistory();
  const goBack = () => history.goBack();

  const handleOnSubmit = () => {
    const state = {};
    let path = '/';
    if (anyRequirementNotMet()) {
      state['declinedElements'] = getDeclinedElements();
      state['requiredElementsNumber'] = requiredElements.size;
      state['declineSurveyPathMap'] = getDeclineSurveyPaths(state['declinedElements']);
      path = `/decline-survey/${state['declinedElements'][0]}`;
    }
    history.push(path, state);
  };

  return (
    <div className={styles.study_data_sharing}>
      <div className={styles.study_data_sharing__nav_bar}>
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
      <div className={styles.study_data_sharing__header}>
        <Header title="Data Sharing Setting" hasGoBack />
      </div>
      <div className={styles['study_data_sharing__header--noBackground']}>
        <Header title="Data Sharing Setting" noBackground />
      </div>
      <div className={styles.study_data_sharing__body}>
        <div className={styles.study_data_sharing__content}>
          <StudyDataSharingForm
            requiredElements={requiredElements}
            dataElementsStateMap={dataElementsStateMap}
            dataElementsHandleChangeMap={dataElementsHandleChangeMap}
          />
          <div className={styles.study_data_sharing__button_container}>
            <Button label="Back" secondary handleClick={goBack} />
            <Button label="Next" handleClick={handleOnSubmit} />
          </div>
        </div>
      </div>
      <div className={styles.study_data_sharing__footer}>
        <Footer alignContentEvenly={false} sticky={sticky}>
          <Button label="Next" handleClick={handleOnSubmit} />
        </Footer>
      </div>
    </div>
  );
};

export default StudyDataSharing;
