import React, { useCallback } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import styles from './BaselinePreferenceHandler.module.css';
import BaselinePreferenceIntro from './BaselinePreferenceIntro';
import BaselinePreferenceForm from './BaselinePreferenceForm';

const BaselinePreferenceHandler = () => {
  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  const getPath = useCallback((key) => {
    const nextPaths = new Map();
    nextPaths.set('intro', '/demographic');
    nextPaths.set('demographic', '/general-clinical');
    nextPaths.set('general-clinical', '/biospecimen');
    nextPaths.set('biospecimen', '/genetic');
    nextPaths.set('genetic', '/mental-health');
    nextPaths.set('mental-health', '/sexual-and-reproductive-health');
    nextPaths.set('sexual-and-reproductive-health', '/family-history');
    return nextPaths.get(key);
  }, []);

  return (
    <Switch>
      <Route path="/:dataElement">
        <BaselinePreferenceForm cb={getPath} />
      </Route>
      <Route path="/">
        <BaselinePreferenceIntro cb={getPath} />
      </Route>
    </Switch>
  );
};

export default BaselinePreferenceHandler;
