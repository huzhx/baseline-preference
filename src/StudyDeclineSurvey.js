import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './StudyDeclineSurvey.module.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import IconButton from './IconButton';
import NavBar from './NavBar';
import StudyDeclineSurveyFrom from './StudyDeclineSurveyForm';

const StudyDeclineSurvey = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const question =
    'We noticed you are not willing to share some data or any data with us for this study, could you please tell us why?';
  const options = [
    ' a. I am concerned about the security of the information I provided',
    'b.  I am not interested in this topic',
    'c.  Other',
  ];

  const [declineState, setDeclineState] = useState('');
  const handleDeclineChange = (event) => {
    setDeclineState(event.target.value);
  };

  const [ifOtherSelectedState, setIfOtherSelectedState] = useState(false);

  const [commentState, setCommentState] = useState('');
  const handleCommentChange = (event) => {
    setCommentState(event.target.value);
  };

  useEffect(() => {
    console.log({ declineState });
    console.log({ commentState });
    if (declineState === options[2]) {
      setIfOtherSelectedState(true);
    } else {
      setIfOtherSelectedState(false);
      setCommentState('');
    }
  }, [declineState, options, commentState]);

  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <div className={styles.study_survey}>
      <div className={styles.study_survey__nav_bar}>
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
      <div className={styles.study_survey__header}>
        <Header title="Sorry to see you go" hasGoBack />
      </div>
      <div className={styles['study_survey__header--noBackground']}>
        <Header title="Sorry to see you go" noBackground />
      </div>
      <div className={styles.study_survey__body}>
        <div className={styles.study_survey__content}>
          <StudyDeclineSurveyFrom
            question={question}
            options={options}
            declineState={declineState}
            handleDeclineChange={handleDeclineChange}
            ifOtherSelectedState={ifOtherSelectedState}
            handleCommentChange={handleCommentChange}
            commentState={commentState}
          />
          <div className={styles.study_survey__button_container}>
            <Button label="Back" secondary handleClick={goBack} />
            <Button label="Submit" />
          </div>
        </div>
      </div>
      <div className={styles.study_survey__footer}>
        <Footer alignContentEvenly={false} sticky={sticky}>
          <Button label="Submit" />
        </Footer>
      </div>
    </div>
  );
};

export default StudyDeclineSurvey;
