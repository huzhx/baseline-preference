import React, { useState, useEffect } from 'react';

import styles from './StudyDeclineSurvey.module.css';
import Header from './Header';
import StudyDeclineSurveyElement from './StudyDeclineSurveyElement';
import Footer from './Footer';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import Textarea from './Textarea';

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

  useEffect(() => {
    console.log({ declineState });
    if (declineState === options[2]) {
      setIfOtherSelectedState(true);
    } else {
      setIfOtherSelectedState(false);
    }
  }, [declineState, options]);

  const radioGroup = [];
  for (let option of options) {
    radioGroup.push(
      <StudyDeclineSurveyElement
        key={option}
        option={option}
        curCheckedValue={declineState}
        handleOnChange={handleDeclineChange}
      />
    );
  }

  return (
    <div className={styles.study_survey}>
      <Header title="Sorry to see you go" />
      <div className={styles.study_survey__body}>
        <div className={styles.study_survey__form}>
          <div className={styles.study_survey__question}>{question}</div>
          {radioGroup}
          <div
            className={
              ifOtherSelectedState
                ? styles.study_survey__comment
                : [styles.study_survey__comment, styles['study_survey__comment--hidden']].join(' ')
            }
          >
            <Textarea placeholder="Please specify" />
          </div>
        </div>
      </div>
      <Footer alignContentEvenly={false} sticky={sticky}>
        <Button label="Submit" />
      </Footer>
    </div>
  );
};

export default StudyDeclineSurvey;
