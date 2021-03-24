import React, { useState, useEffect } from 'react';
import { useParams, useHistory, useLocation } from 'react-router-dom';

import styles from './BaselinePreferenceForm.module.css';
import BaselinePreferenceFormElement from './BaselinePreferenceFormElement';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import IconButton from './IconButton';

const BaselinePreferenceForm = ({ cb }) => {
  const { pathname } = useLocation();

  const { index, dataElement, org } = useParams();
  console.log({ index, dataElement, org, cb });
  let nextPath = '';
  if (dataElement) nextPath = cb(`v1-${dataElement}`);
  if (org) nextPath = cb(`v2-${org}`);
  console.log({ nextPath });
  const history = useHistory();
  const goBack = () => history.goBack();
  const handleClick = () => {
    history.push(nextPath);
  };

  let title = '';
  let addon = '';
  let highlights = '';
  if (dataElement) {
    title = `${index}. Would you share your`;
    addon = 'information with';
    highlights = dataElement.split('-').join(' ');
  } else {
    title = `${index}. Would you share the information below with`;
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
  }

  const buttonLabel = 'next';

  return (
    <div className={styles.baseline_preference_form}>
      <div className={styles.baseline_preference_form__nav_bar}>
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
      <div className={styles.baseline_preference_form__header}>
        <Header title={title} highlights={highlights} addon={addon} hasGoBack />
      </div>
      <div className={styles['baseline_preference_form__header--noBackground']}>
        <Header title={title} highlights={highlights} addon={addon} noBackground />
      </div>
      <div className={styles.baseline_preference_form__body}>
        <div className={styles.baseline_preference_form__content}>
          {baselinePreferenceFormElements}

          <div className={styles.baseline_preference_form__button_container}>
            <Button label="Back" secondary handleClick={goBack} />
            <Button label={buttonLabel} handleClick={handleClick} />
          </div>
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
