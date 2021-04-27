import React, { useCallback } from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

import BaselinePreferenceIntro from './BaselinePreferenceIntro';
import BaselinePreferenceForm from './BaselinePreferenceForm';
import BaselinePreferenceSetting from './BaselinePreferenceSetting';

const BaselinePreferenceHandler = () => {
  const { path, url } = useRouteMatch();

  const getPath = useCallback((key) => {
    const nextPaths = new Map();
    nextPaths.set('intro', `${url}/v2/1/a-doctor-office`);
    // nextPaths.set('v1-setting', `${url}/v1/1/demographic`);
    // nextPaths.set('v1-demographic', `${url}/v1/2/general-clinical`);
    // nextPaths.set('v1-general-clinical', `${url}/v1/3/biospecimen`);
    // nextPaths.set('v1-biospecimen', `${url}/v1/4/genetic`);
    // nextPaths.set('v1-genetic', `${url}/v1/5/mental-health`);
    // nextPaths.set('v1-mental-health', `${url}/v1/6/sexual-and-reproductive-health`);
    // nextPaths.set('v1-sexual-and-reproductive-health', `${url}/v1/7/family-history`);
    // nextPaths.set('v1-family-history', '/');
    nextPaths.set('v2-setting', `${url}/v2/1/a-doctor-office`);
    nextPaths.set('v2-a-doctor-office', `${url}/v2/2/a-hospital`);
    nextPaths.set('v2-a-hospital', `${url}/v2/3/an-insurance-company`);
    nextPaths.set('v2-an-insurance-company', `${url}/v2/4/a-state-or-local-health-agency`);
    nextPaths.set('v2-a-state-or-local-health-agency', `${url}/v2/5/a-national-government-health-agency`);
    nextPaths.set('v2-a-national-government-health-agency', `${url}/v2/6/a-biotechnology-company`);
    nextPaths.set('v2-a-biotechnology-company', `${url}/v2/7/a-college-or-university`);
    nextPaths.set('v2-a-college-or-university', '/');
    return nextPaths.get(key);
  }, []);

  return (
    <Switch>
      <Route path={`${path}/setting`}>
        <BaselinePreferenceSetting cb={getPath} />
      </Route>
      <Route path={`${path}/v1/:index/:dataElement`}>
        <BaselinePreferenceForm cb={getPath} />
      </Route>
      <Route path={`${path}/v2/:index/:org`}>
        <BaselinePreferenceForm cb={getPath} />
      </Route>
      <Route path={path}>
        <BaselinePreferenceIntro cb={getPath} />
      </Route>
    </Switch>
  );
};

export default BaselinePreferenceHandler;
