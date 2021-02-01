import React, { useCallback } from 'react';
import { useRouteMatch, Switch, Route, useHistory } from 'react-router-dom';

import styles from './BaselinePreferenceHandler.module.css';
import BaselinePreferenceIntro from './BaselinePreferenceIntro';
import BaselinePreferenceForm from './BaselinePreferenceForm';

const BaselinePreferenceHandler = () => {
  const { path, url } = useRouteMatch();

  const history = useHistory();

  const handleClick = (path) => {
    history.push(path);
  };

  const getPath = useCallback((key) => {
    const nextPaths = new Map();
    nextPaths.set('intro', `${url}/demographic`);
    nextPaths.set('demographic', `${url}/general-clinical`);
    nextPaths.set('general-clinical', `${url}/biospecimen`);
    nextPaths.set('biospecimen', `${url}/genetic`);
    nextPaths.set('genetic', `${url}/mental-health`);
    nextPaths.set('mental-health', `${url}/sexual-and-reproductive-health`);
    nextPaths.set('sexual-and-reproductive-health', `${url}/family-history`);
    nextPaths.set('family-history', '/');
    return nextPaths.get(key);
  }, []);

  return (
    <Switch>
      <Route path={`${path}/:dataElement`}>
        <BaselinePreferenceForm cb={getPath} />
      </Route>
      <Route path={path}>
        <BaselinePreferenceIntro cb={getPath} />
      </Route>
    </Switch>
  );
};

export default BaselinePreferenceHandler;
