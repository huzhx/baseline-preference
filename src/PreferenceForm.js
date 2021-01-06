import React, { useState, useEffect } from 'react';

import styles from './PreferenceForm.module.css';
import PreferenceFormElement from './PreferenceFormElement';

const PreferenceForm = ({ dataElement, handleClick }) => {
  const [doctorOfficeState, setDoctorOfficeState] = useState('');
  const [hospitalState, setHospitalState] = useState('');
  const [insuranceState, setInsuranceState] = useState('');
  const [stateLocalHAState, setStateLocalHAState] = useState('');
  const [governmentHAState, setGovernmentHAState] = useState('');
  const [biotechnologyState, setBiotechnologyState] = useState('');
  const [universityState, setUniversityState] = useState('');

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

  useEffect(() => {
    console.log({
      doctorOfficeState,
      hospitalState,
      insuranceState,
      stateLocalHAState,
      governmentHAState,
      biotechnologyState,
      universityState,
    });
  }, [
    doctorOfficeState,
    hospitalState,
    insuranceState,
    stateLocalHAState,
    governmentHAState,
    biotechnologyState,
    universityState,
  ]);

  const labels = [
    'A doctor’s office',
    'A hospital',
    'An insurance company',
    'A state or local health agency',
    'A national government health agency',
    'A biotechnology company',
    'A college or university',
  ];
  const labelStateMap = new Map();
  const labelHandleChangeMap = new Map();

  labelStateMap.set(labels[0], doctorOfficeState);
  labelStateMap.set(labels[1], hospitalState);
  labelStateMap.set(labels[2], insuranceState);
  labelStateMap.set(labels[3], stateLocalHAState);
  labelStateMap.set(labels[4], governmentHAState);
  labelStateMap.set(labels[5], biotechnologyState);
  labelStateMap.set(labels[6], universityState);

  labelHandleChangeMap.set(labels[0], handleDoctorOfficeChange);
  labelHandleChangeMap.set(labels[1], handleHospitalChange);
  labelHandleChangeMap.set(labels[2], handleInsuranceChange);
  labelHandleChangeMap.set(labels[3], handleStateLocalHAChange);
  labelHandleChangeMap.set(labels[4], handleGovernmentHAChange);
  labelHandleChangeMap.set(labels[5], handleBiotechnologyChange);
  labelHandleChangeMap.set(labels[6], handleUniversityChange);

  const options = ['Yes', 'No'];

  const preferenceFormElements = [];

  for (let label of labels) {
    const curCheckedValue = labelStateMap.get(label);
    const handleChange = labelHandleChangeMap.get(label);
    preferenceFormElements.push(
      <PreferenceFormElement
        key={label}
        label={label}
        options={options}
        curCheckedValue={curCheckedValue}
        handleChange={handleChange}
      />
    );
  }

  return (
    <div className={styles.preference_form}>
      <div className={styles.preference_form__header}>
        <div>
          How Comfortable are you with sharing your{' '}
          <span className={styles['preference_form__header--highlighted']}>{dataElement} Information</span>
        </div>
      </div>
      {preferenceFormElements}
    </div>
  );
};

export default PreferenceForm;
