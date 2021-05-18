import React from 'react';
import styled from 'styled-components';

import NotificationPreferenceElement from './NotificationPreferenceElement';

const NotificationPreference = () => {
  const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: auto;
  `;

  const labels = [
    'Please notify me when there are new studies that may benefit from using my data.',
    'Please notify me when my data are used by studies with which I agreed to share my data.',
  ];

  const content = [];
  for (let label of labels) {
    content.push(<NotificationPreferenceElement key={label} label={label} />);
  }

  return (
    <div testId="notificationPreferenceContainer">
      <Form>{content}</Form>
    </div>
  );
};

export default NotificationPreference;
