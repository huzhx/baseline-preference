import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import styles from './StudyDataSharing.module.css';
import StudyDataSharingForm from './StudyDataSharingForm';
import Header from './Header';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import Footer from './Footer';
import AppNavBar from './AppNavBar';
import Modal from 'react-modal';
import Confetti from 'react-dom-confetti';

const StudyDataSharing = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const { studyId, status } = useParams();

  let description = '';
  switch (status) {
    case 'new':
      description =
        'This is the data requested by the study. The items you previously agreed to share in the baseline preferences already have a checkmark. If you want to make a change, click on the box.';
      break;
    case 'modify':
      description =
        'This is the data requested by the study and what you previously decided to share. If you want to make any changes, click on the checkbox.';
      break;
  }

  const orgTypes = {
    1: 'A college or university',
    2: 'A state or local health agency',
    3: 'A hospital',
    4: 'A college or university',
  };

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
  const [confirmModalOpenSate, setConfirmModalOpenState] = useState(false);
  const [closureModalOpenState, setClosureModalOpenState] = useState(false);

  Modal.setAppElement('body');

  const closeModal = (fn) => {
    fn(false);
  };

  const confettiConfig = {
    angle: '90',
    spread: '360',
    startVelocity: '30',
    elementCount: '200',
    dragFriction: '0.10',
    duration: '1800',
    stagger: '2',
    width: '6px',
    height: '8px',
    perspective: '452px',
    colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
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

  const handleConfirmation = () => {
    setConfirmModalOpenState(true);
  };

  const handleOnSubmit = () => {
    if (anyRequirementNotMet()) {
      const state = {};
      let path = '/';
      state['declinedElements'] = getDeclinedElements();
      state['requiredElementsNumber'] = requiredElements.size;
      state['declineSurveyPathMap'] = getDeclineSurveyPaths(state['declinedElements']);
      path = `/decline-survey/${state['declinedElements'][0]}`;
      history.push(path, state);
    } else {
      setConfirmModalOpenState(false);
      setClosureModalOpenState(true);
    }
  };

  return (
    <div className={styles.study_data_sharing}>
      <div className={styles.study_data_sharing__nav_bar}>
        <AppNavBar />
      </div>
      <div className={styles.study_data_sharing__header}>
        <Header title="Data Sharing Setting" hasGoBack />
      </div>
      <div className={styles['study_data_sharing__header--noBackground']}>
        <Header title="Data Sharing Setting" noBackground />
      </div>
      <div className={styles.study_data_sharing__body}>
        <div className={styles.study_data_sharing__content}>
          <div className={styles.study_data_sharing__content__description}>
            {description
              .split('. ')
              .slice(0, description.split('. ').length - 1)
              .join('. ') + '. '}
            <span className={styles['study_data_sharing__content__description--highlighted']}>
              {description
                .split('. ')
                .slice(description.split('. ').length - 1)
                .join('. ')}
            </span>
          </div>
          <Confetti
            className={styles.study_data_sharing__confetti}
            active={closureModalOpenState}
            config={confettiConfig}
          />
          <StudyDataSharingForm
            requiredElements={requiredElements}
            dataElementsStateMap={dataElementsStateMap}
            dataElementsHandleChangeMap={dataElementsHandleChangeMap}
          />
          <Modal
            isOpen={modalOpenState}
            contentLabel="Would you like to update your baseline preference?"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div>
              Would you like to change your default {modalDataElementState} sharing preference for research done by
              {' ' + orgTypes[studyId].toLowerCase()}?
            </div>
            <div className={styles.study_data_sharing__button_container}>
              <Button label="No" secondary handleClick={() => closeModal(setModalOpenState)} />
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
            <Button label="Next" handleClick={handleConfirmation} />
          </div>
          <Modal
            isOpen={confirmModalOpenSate}
            contentLabel="Submission confirmation"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div>Are you sure you want to submit?</div>
            <div className={styles.study_data_sharing__button_container}>
              <Button label="No" secondary handleClick={() => closeModal(setConfirmModalOpenState)} />
              <Button label="Yes" handleClick={handleOnSubmit} />
            </div>
          </Modal>
          <Modal
            isOpen={closureModalOpenState}
            contentLabel="Thank you for submission"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div>Thank you for your submission! You are all set. You will be back to the Home Page.</div>
            <div className={styles.study_data_sharing__button_container}>
              <Button
                label="Ok"
                handleClick={() => {
                  history.push('/');
                }}
              />
            </div>
          </Modal>
        </div>
      </div>
      <div className={styles.study_data_sharing__footer}>
        <Footer alignContentEvenly={false} sticky={sticky}>
          <Button label="Next" handleClick={handleConfirmation} />
        </Footer>
      </div>
    </div>
  );
};

export default StudyDataSharing;
