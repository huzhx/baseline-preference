import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import styles from './BaselinePreferenceForm.module.css';
import BaselinePreferenceFormElement from './BaselinePreferenceFormElement';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import Header from './Header';
import Footer from './Footer';

const BaselinePreferenceForm = ({ cb }) => {
  const { dataElement } = useParams();
  const nextPath = cb(dataElement);
  const history = useHistory();
  const handleClick = () => {
    history.push(nextPath);
  };

  const [sticky, setSticky] = useState(false);
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

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

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

  const baselinePreferenceFormElements = [];

  for (let label of labels) {
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

  const buttonLabel = 'next';

  return (
    <div className={styles.baseline_preference_form}>
      <Header title="How Comfortable are you with sharing your" highlights={dataElement.split('-').join(' ')} />
      <div className={styles.baseline_preference_form__body}>
        <div className={styles.baseline_preference_form__content}>{baselinePreferenceFormElements}</div>
      </div>
      <Footer alignContentEvenly={false} sticky={sticky}>
        <Button label={buttonLabel} handleClick={handleClick} />
      </Footer>
    </div>
  );
};

export default BaselinePreferenceForm;
