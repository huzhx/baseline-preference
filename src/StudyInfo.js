import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import styles from './StudyInfo.module.css';
import Study from './Study';
import Header from './Header';
import Button from './Button';
import { useScrollPosition } from './UseScrollPosition';
import Footer from './Footer';
import AppNavBar from './AppNavBar';

const StudyInfo = () => {
  const [sticky, setSticky] = useState(false);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y <= prevPos.y;
      if (isShow !== sticky) setSticky(isShow);
    },
    [sticky]
  );

  const studiesInfo = {
    1: {
      reqId: '1',
      institution: 'Stanford University',
      sponsor: 'Stanford University',
      title: 'Clinical-trial of COVID-19 Convalescent Plasma in Outpatients',
      purpose:
        'The overarching goal of this project is to confirm or refute the role of passive immunization as a safe and efficacious therapy in preventing the progression from mild to severe/critical COVID-19 illness and to understand the immunologic kinetics of anti-SARS-CoV-2 antibodies after passive immunization.The primary objective is to determine the efficacy and safety of a single dose of convalescent plasma (CP) for preventing the progression from mild to severe COVID-19 illness. The secondary objective is to characterize the immunologic response to CP administration.',
      principleInvestigator:
        'Clifton W Callaway, Valerie Durkalski-Mauldin, Frederick Korley, Sharon Yeatts, Robert Silbergleit, William Barsan',
      irbContent:
        'The study protocol has been approved by the Stanford University Review Board (IRB) (2020-051). Any protocol modifications will be submitted for the IRB review and approval.',
      irbApprovalDate: '08/11/2020',
      irbApprovedBy: 'Stanford University',
      additionalInfoURL: 'https://www.clinicaltrials.gov/ct2/show/NCT04355767?term=UCSD&cond=COVID-19&draw=2&rank=2',
      status: 'Data Not Shared Yet',
    },
    2: {
      reqId: '2',
      institution: 'Observational Health Data Sciences and Informatics (OHDSI)',
      sponsor: 'Sun Yat-Sen University',
      title:
        'Development and validation of a prognostic model predicting symptomatic hemorrhagic transformation in acute ischemic stroke',
      purpose:
        'Develop and validate a model to predict a patient’s risk of HT within 30 days of initial ischemic stroke',
      principleInvestigator: 'Qiong Wang',
      irbContent:
        'The study protocol has been approved by the Sun Yat-Sen University Institutional Review Board (IRB) (2020-095). Any protocol modifications will be submitted for the IRB review and approval.',
      irbApprovalDate: '01/07/2020',
      irbApprovedBy: 'Sun Yat-Sen University',
      additionalInfoURL: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0226718',
      status: 'Data Shared',
    },
    3: {
      reqId: '3',
      institution: 'Peking University First Hospital',
      sponsor: 'Peking University First Hospital',
      title: 'COVID-19 Surveillance Based on Smart Wearable Device',
      purpose:
        "This is a prospective, multi-center cohort study. 200 subjects with COVID-19will be included . Wearable device's physiological parameters and clinical data will be continually collected , the investigators aim to explore whether using smart wearable devices is useful to early alerting deterioration of COVID-19.",
      principleInvestigator: 'Jing Ma',
      irbContent:
        'The study protocol has been approved by the Peking University First Hospital Institutional Review Board (IRB) (2020-055). Any protocol modifications will be submitted for the IRB review and approval.',
      irbApprovalDate: '03/10/2021',
      irbApprovedBy: 'Peking University First Hospital',
      additionalInfoURL: 'https://www.clinicaltrials.gov/ct2/show/NCT04459637?cond=COVID-19&draw=2&rank=4',
    },
    4: {
      reqId: '4',
      institution: 'Medical Convergence Research Center, Wonkwang University',
      sponsor: 'Wonkwang University',
      title: 'Analysis and classification of urinary stones',
      purpose:
        'Develop and validate the deep learning algorithm for the detection of urinary stone by using the CT images',
      principleInvestigator: 'Si-Hyeong Noh',
      irbContent:
        'The study protocol has been approved by the Wonkwang University Institutional Review Board (IRB) (2020-085). Any protocol modifications will be submitted for the IRB review and approval.',
      irbApprovalDate: '08/27/2020',
      irbApprovedBy: 'Wonkwang University',
      additionalInfoURL: 'https://link.springer.com/chapter/10.1007%2F978-3-030-55190-2_60',
    },
  };

  const { reqId } = useParams();

  const studyInfo = studiesInfo[reqId];

  console.log(studyInfo);

  let path;
  if (typeof studyInfo['status'] !== 'undefined' && studyInfo['status'] === 'Data Shared') {
    path = '/data-sharing-review';
  } else if (typeof studyInfo['status'] === 'undefined') {
    path = `/data-sharing-setting/${reqId}/new`;
  } else {
    path = `/data-sharing-setting/${reqId}/modify`;
  }

  const history = useHistory();
  const goBack = () => history.goBack();
  const goForward = () => history.push(path);

  return (
    <div className={styles.study_info}>
      <div className={styles.study_info__nav_bar}>
        <AppNavBar />
      </div>
      <div className={styles.study_info__header}>
        <Header title="Study Information" hasGoBack />
      </div>
      <div className={styles['study_info__header--noBackground']}>
        <Header title="Study Information" noBackground />
      </div>
      <div className={styles.study_info__body}>
        <div className={styles.study_info__content}>
          <Study
            institution={studyInfo.institution}
            sponsor={studyInfo.sponsor}
            title={studyInfo.title}
            purpose={studyInfo.purpose}
            principleInvestigator={studyInfo.principleInvestigator}
            irbContent={studyInfo.irbContent}
            irbApprovalDate={studyInfo.irbApprovalDate}
            irbApprovedBy={studyInfo.irbApprovedBy}
            additionalInfoURL={studyInfo.additionalInfoURL}
          />
          <div data-testid="studyInfoButtonContainer" className={styles.study_info__button_container}>
            <Button label="Back" secondary handleClick={goBack} />
            <Button label="Next" handleClick={goForward} />
          </div>
        </div>
      </div>
      <div className={styles.study_info__footer}>
        <Footer alignContentEvenly={false} sticky={sticky}>
          <Button label="Next" handleClick={goForward} />
        </Footer>
      </div>
    </div>
  );
};

export default StudyInfo;
