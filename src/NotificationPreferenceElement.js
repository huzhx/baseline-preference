import React from 'react';
import styled from 'styled-components';

import Checkbox from './Checkbox';

const NotificationPreferenceElement = ({ label, checked, onChange }) => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr;
    column-gap: 3%;
    grid-template-rows: auto;
    align-items: center;
    justify-items: center;
    padding: 0.8em 0;
  `;
  const Label = styled.div`
    color: var(--primary-text-color);
    font-size: 1rem;
    font-weight: 650;
    line-height: 1.6em;
    letter-spacing: 0.05em;
  `;

  return (
    <Container>
      <Label>{label}</Label>
      <Checkbox checked={checked} onChange={onChange} />
    </Container>
  );
};

export default NotificationPreferenceElement;
