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
import Modal from 'react-modal';

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

  const baselinePreference = new Map();
  baselinePreference.set('demographic', true);
  baselinePreference.set('general clinical', false);
  baselinePreference.set('biospecimen', true);
  baselinePreference.set('genetic', false);
  baselinePreference.set('mental health', false);
  baselinePreference.set('sexual and reproductive health', true);
  baselinePreference.set('family history', true);

  const [baselinePreferenceState, setBaselinePreferenceState] = useState(baselinePreference);

  const [demographicState, setDemographicState] = useState(baselinePreferenceState.get('demographic'));
  const [generalClinicalState, setGeneralClinicalState] = useState(baselinePreferenceState.get('general clinical'));
  const [biospecimenState, setBiospecimenState] = useState(baselinePreferenceState.get('biospecimen'));
  const [geneticState, setGeneticState] = useState(baselinePreferenceState.get('genetic'));
  const [mentalHealthState, setMentalHealthState] = useState(baselinePreferenceState.get('mental health'));
  const [sexAndRepState, setSexAndRepState] = useState(baselinePreferenceState.get('sexual and reproductive health'));
  const [familyHistoryState, setFamilyHistoryState] = useState(baselinePreferenceState.get('family history'));

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

  const [modalOpenState, setModalOpenState] = useState(false);
  const [modalDataElementState, setModalDataElementState] = useState(null);

  const customModalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(240, 240, 240, 0.8)',
    },
    content: {
      top: '37%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      border: '1px solid transparent',
      borderRadius: '2em',
      boxShadow: '0 0.2em 0.5em 0 rgba(0, 0, 0, 0.1)',
      padding: '3em 2em 1em 2em',
      outline: 'none',
      fontSize: '1rem',
      fontWeight: '650',
      lineHeight: '1.6em',
      letterSpacing: '0.05em',
      maxWidth: '40em',
    },
  };

  Modal.setAppElement(document.getElementById('body'));

  const closeModal = () => {
    setModalOpenState(false);
  };

  const updateBaseline = (dataElement) => {
    const dataElementState = dataElementsStateMap.get(dataElement);
    baselinePreferenceState.set(dataElement, dataElementState);
    setBaselinePreferenceState(baselinePreferenceState);
    setModalOpenState(false);
    console.log({ baselinePreferenceState });
  };

  useEffect(() => {
    console.log({ baselinePreferenceState });
    if (demographicState !== baselinePreferenceState.get('demographic')) {
      setModalOpenState(true);
      setModalDataElementState('demographic');
    }
  }, [demographicState]);

  useEffect(() => {
    console.log({ baselinePreferenceState });
    if (generalClinicalState !== baselinePreferenceState.get('general clinical')) {
      setModalOpenState(true);
      setModalDataElementState('general clinical');
    }
  }, [generalClinicalState]);

  useEffect(() => {
    console.log({ baselinePreferenceState });
    if (biospecimenState !== baselinePreferenceState.get('biospecimen')) {
      setModalOpenState(true);
      setModalDataElementState('biospecimen');
    }
  }, [biospecimenState]);

  useEffect(() => {
    console.log({ baselinePreferenceState });
    if (geneticState !== baselinePreferenceState.get('genetic')) {
      setModalOpenState(true);
      setModalDataElementState('genetic');
    }
  }, [geneticState]);

  useEffect(() => {
    console.log({ baselinePreferenceState });
    if (mentalHealthState !== baselinePreferenceState.get('mental health')) {
      setModalOpenState(true);
      setModalDataElementState('mental health');
    }
  }, [mentalHealthState]);

  useEffect(() => {
    console.log({ baselinePreferenceState });
    if (sexAndRepState !== baselinePreferenceState.get('sexual and reproductive health')) {
      setModalOpenState(true);
      setModalDataElementState('sexual and reproductive health');
    }
  }, [sexAndRepState]);

  useEffect(() => {
    console.log({ baselinePreferenceState });
    if (familyHistoryState !== baselinePreferenceState.get('family history')) {
      setModalOpenState(true);
      setModalDataElementState('family history');
    }
  }, [familyHistoryState]);

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
          <Modal
            isOpen={modalOpenState}
            style={customModalStyles}
            contentLabel="Would you like to update your baseline Preference?"
          >
            <div>
              You just chose a preference that is different from your {modalDataElementState} baseline preference. Would
              you like to update your {modalDataElementState} baseline preference?
            </div>
            <div className={styles.study_data_sharing__button_container}>
              <Button label="No" secondary handleClick={closeModal} />
              <Button
                label="Yes"
                handleClick={() => {
                  updateBaseline(modalDataElementState);
                }}
              />
            </div>
          </Modal>
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
