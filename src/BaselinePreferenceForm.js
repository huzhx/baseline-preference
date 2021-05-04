import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';

import styles from './BaselinePreferenceForm.module.css';
import BaselinePreferenceFormElement from './BaselinePreferenceFormElement';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import Header from './Header';
import Footer from './Footer';
import AppNavBar from './AppNavBar';
import Modal from 'react-modal';
import Confetti from 'react-dom-confetti';

const BaselinePreferenceForm = ({ cb }) => {
  const { pathname } = useLocation();

  const [modalOpenState, setModalOpenState] = useState(false);

  Modal.setAppElement('body');

  const closeModal = () => {
    setModalOpenState(false);
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

  const { index, dataElement, org } = useParams();
  console.log({ index, dataElement, org, cb });
  let nextPath = '';
  if (dataElement) nextPath = cb(`v1-${dataElement}`);
  if (org) nextPath = cb(`v2-${org}`);
  console.log({ nextPath });
  const history = useHistory();
  const goBack = () => history.goBack();
  const handleClick = () => {
    console.log({ org });
    if (org === 'a-college-or-university') {
      setModalOpenState(true);
      window.scrollTo(0, 0);
    } else {
      history.push(nextPath);
    }
  };

  let title = '';
  let addon = '';
  let highlights = '';
  if (dataElement) {
    title = `${index}. Would you share your`;
    addon = 'information with';
    highlights = dataElement.split('-').join(' ');
  } else {
    title = `${index}. Would you share the following information with `;
    highlights = org.split('-').join(' ');
  }

  const [sticky, setSticky] = useState(false);
  // for v1
  const [doctorOfficeState, setDoctorOfficeState] = useState('');
  const [hospitalState, setHospitalState] = useState('');
  const [insuranceState, setInsuranceState] = useState('');
  const [stateLocalHAState, setStateLocalHAState] = useState('');
  const [governmentHAState, setGovernmentHAState] = useState('');
  const [biotechnologyState, setBiotechnologyState] = useState('');
  const [universityState, setUniversityState] = useState('');
  // for v2
  const [demographicState, setDemographicState] = useState('');
  const [generalClinicalState, setGeneralClinicalState] = useState('');
  const [biospecimenState, setBiospecimenState] = useState('');
  const [geneticState, setGeneticState] = useState('');
  const [mentalHealthState, setMentalHealthState] = useState('');
  const [sexAndReproductiveState, setSexAndReproductiveState] = useState('');
  const [familyHistoryState, setFamilyHistoryState] = useState('');
  // for v1
  const handleDoctorOfficeChange = (event) => {
    setDoctorOfficeState(event.target.value);
  };
  const handleHospitalChange = (event) => {
    setHospitalState(event.target.value);
  };
  const handleInsuranceChange = (event) => {
    setInsuranceState(event.target.value);
  };
  const handleStateLocalHAChange = (event) => {
    setStateLocalHAState(event.target.value);
  };
  const handleGovernmentHAChange = (event) => {
    setGovernmentHAState(event.target.value);
  };
  const handleBiotechnologyChange = (event) => {
    setBiotechnologyState(event.target.value);
  };
  const handleUniversityChange = (event) => {
    setUniversityState(event.target.value);
  };
  // for v2
  const handleDemographicChange = (event) => {
    setDemographicState(event.target.value);
  };
  const handleGeneralClinicalChange = (event) => {
    setGeneralClinicalState(event.target.value);
  };
  const handleBiospecimenChange = (event) => {
    setBiospecimenState(event.target.value);
  };
  const handleGeneticChange = (event) => {
    setGeneticState(event.target.value);
  };
  const handleMentalHealthChange = (event) => {
    setMentalHealthState(event.target.value);
  };
  const handleSexAndReproductiveChange = (event) => {
    setSexAndReproductiveState(event.target.value);
  };
  const handleFamilyHistoryChange = (event) => {
    setFamilyHistoryState(event.target.value);
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    // for v1
    setDoctorOfficeState('');
    setHospitalState('');
    setInsuranceState('');
    setStateLocalHAState('');
    setGovernmentHAState('');
    setBiotechnologyState('');
    setUniversityState('');
    // for v2
    setDemographicState('');
    setGeneralClinicalState('');
    setBiospecimenState('');
    setGeneticState('');
    setMentalHealthState('');
    setSexAndReproductiveState('');
    setFamilyHistoryState('');
  }, [pathname]);

  useEffect(() => {
    console.log({
      // for v1
      doctorOfficeState,
      hospitalState,
      insuranceState,
      stateLocalHAState,
      governmentHAState,
      biotechnologyState,
      universityState,
      // for v2
      demographicState,
      generalClinicalState,
      biospecimenState,
      geneticState,
      mentalHealthState,
      sexAndReproductiveState,
      familyHistoryState,
    });
  }, [
    // for v1
    doctorOfficeState,
    hospitalState,
    insuranceState,
    stateLocalHAState,
    governmentHAState,
    biotechnologyState,
    universityState,
    // for v2
    demographicState,
    generalClinicalState,
    biospecimenState,
    geneticState,
    mentalHealthState,
    sexAndReproductiveState,
    familyHistoryState,
  ]);

  // for v1
  const orgLabels = [
    'A doctor’s office',
    'A hospital',
    'An insurance company',
    'A state or local health agency',
    'A national government health agency',
    'A biotechnology company',
    'A college or university',
  ];
  // for v2
  const dataLabels = [
    'Demographic information',
    'General clinical information',
    'Biospecimen information',
    'Genetic information',
    'Mental health information',
    'Sexual and reproductive health information',
    'Family history information',
  ];
  const labelStateMap = new Map();
  const labelHandleChangeMap = new Map();
  const labelTooltipDataMap = new Map();

  // for v1
  labelStateMap.set(orgLabels[0], doctorOfficeState);
  labelStateMap.set(orgLabels[1], hospitalState);
  labelStateMap.set(orgLabels[2], insuranceState);
  labelStateMap.set(orgLabels[3], stateLocalHAState);
  labelStateMap.set(orgLabels[4], governmentHAState);
  labelStateMap.set(orgLabels[5], biotechnologyState);
  labelStateMap.set(orgLabels[6], universityState);

  labelHandleChangeMap.set(orgLabels[0], handleDoctorOfficeChange);
  labelHandleChangeMap.set(orgLabels[1], handleHospitalChange);
  labelHandleChangeMap.set(orgLabels[2], handleInsuranceChange);
  labelHandleChangeMap.set(orgLabels[3], handleStateLocalHAChange);
  labelHandleChangeMap.set(orgLabels[4], handleGovernmentHAChange);
  labelHandleChangeMap.set(orgLabels[5], handleBiotechnologyChange);
  labelHandleChangeMap.set(orgLabels[6], handleUniversityChange);

  // for v2
  labelStateMap.set(dataLabels[0], demographicState);
  labelStateMap.set(dataLabels[1], generalClinicalState);
  labelStateMap.set(dataLabels[2], biospecimenState);
  labelStateMap.set(dataLabels[3], geneticState);
  labelStateMap.set(dataLabels[4], mentalHealthState);
  labelStateMap.set(dataLabels[5], sexAndReproductiveState);
  labelStateMap.set(dataLabels[6], familyHistoryState);

  labelHandleChangeMap.set(dataLabels[0], handleDemographicChange);
  labelHandleChangeMap.set(dataLabels[1], handleGeneralClinicalChange);
  labelHandleChangeMap.set(dataLabels[2], handleBiospecimenChange);
  labelHandleChangeMap.set(dataLabels[3], handleGeneticChange);
  labelHandleChangeMap.set(dataLabels[4], handleMentalHealthChange);
  labelHandleChangeMap.set(dataLabels[5], handleSexAndReproductiveChange);
  labelHandleChangeMap.set(dataLabels[6], handleFamilyHistoryChange);

  labelTooltipDataMap.set(dataLabels[0], `${dataLabels[0]} stands for ...`);
  labelTooltipDataMap.set(dataLabels[1], `${dataLabels[1]} stands for ...`);
  labelTooltipDataMap.set(dataLabels[2], `${dataLabels[2]} stands for ...`);
  labelTooltipDataMap.set(dataLabels[3], `${dataLabels[3]} stands for ...`);
  labelTooltipDataMap.set(dataLabels[4], `${dataLabels[4]} stands for ...`);
  labelTooltipDataMap.set(dataLabels[5], `${dataLabels[5]} stands for ...`);
  labelTooltipDataMap.set(dataLabels[6], `${dataLabels[6]} stands for ...`);

  const options = ['Yes', 'No'];

  const baselinePreferenceFormElements = [];

  if (dataElement) {
    for (let label of orgLabels) {
      const curCheckedValue = labelStateMap.get(label);
      const handleChange = labelHandleChangeMap.get(label);
      baselinePreferenceFormElements.push(
        <BaselinePreferenceFormElement
          key={label}
          label={label}
          options={options}
          curCheckedValue={curCheckedValue}
          handleChange={handleChange}
        />
      );
    }
  } else {
    for (let label of dataLabels) {
      const curCheckedValue = labelStateMap.get(label);
      const handleChange = labelHandleChangeMap.get(label);
      const tooltipData = labelTooltipDataMap.get(label);
      baselinePreferenceFormElements.push(
        <BaselinePreferenceFormElement
          key={label}
          label={label}
          options={options}
          curCheckedValue={curCheckedValue}
          handleChange={handleChange}
          tooltipData={tooltipData}
        />
      );
    }
  }

  const buttonLabel = 'next';

  return (
    <div className={styles.baseline_preference_form}>
      <div className={styles.baseline_preference_form__nav_bar}>
        <AppNavBar />
      </div>
      <div className={styles.baseline_preference_form__header}>
        <Header
          title={title}
          highlights={highlights}
          addon={addon}
          hasGoBack
          tooltipData={`${highlights[0].toUpperCase() + highlights.slice(1)} stands for ...`}
        />
      </div>
      <div className={styles['baseline_preference_form__header--noBackground']}>
        <Header
          title={title}
          highlights={highlights}
          addon={addon}
          noBackground
          tooltipData={`${highlights[0].toUpperCase() + highlights.slice(1)} stands for ...`}
        />
      </div>
      <div className={styles.baseline_preference_form__body}>
        <div className={styles.baseline_preference_form__content}>
          <Confetti
            className={styles.baseline_preference_form__confetti}
            active={modalOpenState}
            config={confettiConfig}
          />

          {baselinePreferenceFormElements}

          <div className={styles.baseline_preference_form__button_container}>
            <Button label="Back" secondary handleClick={goBack} />
            <Button label={buttonLabel} handleClick={handleClick} />
          </div>

          <Modal
            isOpen={modalOpenState}
            contentLabel="Thank you for set up your baseline preference"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div>Great! Your baseline preference has been set up / updated. Back to the Home Page?</div>
            <div className={styles.baseline_preference_form__button_container}>
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
      <div className={styles.baseline_preference_form__footer}>
        <Footer alignContentEvenly={false} sticky={sticky}>
          <Button label={buttonLabel} handleClick={handleClick} />
        </Footer>
      </div>
    </div>
  );
};

export default BaselinePreferenceForm;
