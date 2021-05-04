import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import styles from './StudyDeclineSurvey.module.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import AppNavBar from './AppNavBar';
import StudyDeclineSurveyFrom from './StudyDeclineSurveyForm';
import Modal from 'react-modal';
import Confetti from 'react-dom-confetti';

const StudyDeclineSurvey = ({
  location: {
    state: { declinedElements, requiredElementsNumber, declineSurveyPathMap },
  },
}) => {
  const { declinedElement } = useParams();

  const [declineState, setDeclineState] = useState('');
  const handleDeclineChange = (event) => {
    setDeclineState(event.target.value);
  };

  const [commentState, setCommentState] = useState('');
  const handleCommentChange = (event) => {
    setCommentState(event.target.value);
  };

  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  useEffect(() => {
    setDeclineState('');
    setCommentState('');
  }, [declinedElement]);

  const history = useHistory();
  const goBack = () => history.goBack();

  const [modalOpenState, setModalOpenState] = useState(false);

  const submitButtonHandler = () => {
    const nextPath = declineSurveyPathMap[declinedElement].nextPath;

    if (nextPath === '/') {
      setModalOpenState(true);
    } else {
      const state = {
        declinedElements: declinedElements,
        requiredElementsNumber: requiredElementsNumber,
        declineSurveyPathMap: declineSurveyPathMap,
      };

      history.push(nextPath, state);
    }
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

  let surveyTitle = '';
  if (declinedElements.length === requiredElementsNumber) {
    surveyTitle = 'Sorry to see you go';
  } else {
    surveyTitle = 'Can you elaborate?';
  }

  return (
    <div className={styles.study_survey}>
      <div className={styles.study_survey__nav_bar}>
        <AppNavBar />
      </div>
      <div className={styles.study_survey__header}>
        <Header title={surveyTitle} />
      </div>
      <div className={styles['study_survey__header--noBackground']}>
        <Header title={surveyTitle} noBackground />
      </div>
      <div className={styles.study_survey__body}>
        <div className={styles.study_survey__content}>
          <Confetti className={styles.study_survey__confetti} active={modalOpenState} config={confettiConfig} />
          <StudyDeclineSurveyFrom
            declineState={declineState}
            handleDeclineChange={handleDeclineChange}
            commentState={commentState}
            handleCommentChange={handleCommentChange}
            declinedElement={declinedElement}
          />
          <div className={styles.study_survey__button_container}>
            <Button label="Next" handleClick={submitButtonHandler} />
          </div>
          <Modal
            isOpen={modalOpenState}
            contentLabel="Thank you for submission"
            className="Modal"
            overlayClassName="Overlay"
          >
            <div>Thank you for your submission! You are all set. You will be back to the Home Page.</div>
            <div className={styles.study_survey__button_container}>
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
      <div className={styles.study_survey__footer}>
        <Footer alignContentEvenly={false} sticky={sticky}>
          <Button label="Next" handleClick={submitButtonHandler} />
        </Footer>
      </div>
    </div>
  );
};

export default StudyDeclineSurvey;
