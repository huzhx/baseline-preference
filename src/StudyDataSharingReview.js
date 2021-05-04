import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './StudyDataSharingReview.module.css';
import StudyDataSharingForm from './StudyDataSharingForm';
import Header from './Header';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import Footer from './Footer';
import AppNavBar from './AppNavBar';
import Modal from 'react-modal';

const StudyDataSharingReview = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const description = 'This is the data requested and shared with the study. This information is read-only.';

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

  const [modalOpenState, setModalOpenState] = useState(false);

  Modal.setAppElement('body');

  const closeModal = () => {
    setModalOpenState(false);
  };

  const handleOnSubmit = () => {
    if (anyRequirementNotMet()) {
      const path = '/decline-survey';
      history.push(path);
    } else {
      setModalOpenState(true);
    }
  };

  return (
    <div className={styles.study_data_sharing_review}>
      <div className={styles.study_data_sharing_review__nav_bar}>
        <AppNavBar />
      </div>
      <div className={styles.study_data_sharing_review__header}>
        <Header title="Data Sharing" hasGoBack />
      </div>
      <div className={styles['study_data_sharing_review__header--noBackground']}>
        <Header title="Data Sharing" noBackground />
      </div>
      <div className={styles.study_data_sharing_review__body}>
        <div className={styles.study_data_sharing_review__content}>
          <div className={styles.study_data_sharing_review__content__description}>
            {description
              .split('. ')
              .slice(0, description.split('. ').length - 1)
              .join('. ') + '. '}
            <span className={styles['study_data_sharing_review__content__description--highlighted']}>
              {description
                .split('. ')
                .slice(description.split('. ').length - 1)
                .join('. ')}
            </span>
          </div>
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

          <Modal
            isOpen={modalOpenState}
            contentLabel="Thank you for your participant"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div className={styles.study_data_sharing_review__modal_content}>
              Thank you for your participant! Back to the Home Page?
            </div>
            <div className={styles.study_data_sharing_review__button_container}>
              <Button label="No" secondary handleClick={closeModal} />
              <Button
                label="Yes"
                handleClick={() => {
                  history.push('/');
                }}
              />
            </div>
          </Modal>
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
