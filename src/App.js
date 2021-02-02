import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BaselinePreferenceHandler from './BaselinePreferenceHandler';
import Home from './Home';
import DataRequests from './DataRequests';
import StudyInfo from './StudyInfo';
import StudyDataSharing from './StudyDataSharing';
import StudyDeclineSurvey from './StudyDeclineSurvey';
import ConsentHistory from './ConsentHistory';
import StudyDataSharingReview from './StudyDataSharingReview';
import PortalPicker from './PortalPicker';
import Portal from './Portal';
import SignIn from './SignIn';
import SignInVeriOpt from './SignInVeriOpt';
import SignInVeriEnterCode from './SignInVeriEnterCode';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/baseline-preference">
          <BaselinePreferenceHandler />
        </Route>
        <Route path="/data-requests">
          <DataRequests />
        </Route>
        <Route path="/study-info/:reqId">
          <StudyInfo />
        </Route>
        <Route path="/consent-history">
          <ConsentHistory />
        </Route>
        <Route path="/data-sharing-setting">
          <StudyDataSharing />
        </Route>
        <Route path="/data-sharing-review">
          <StudyDataSharingReview />
        </Route>
        <Route path="/decline-survey">
          <StudyDeclineSurvey />
        </Route>
        <Route path="/portal-pick">
          <PortalPicker />
        </Route>
        <Route path="/portal/patient">
          <Portal portalType="patient" />
        </Route>
        <Route path="/sign-in/verify-options">
          <SignInVeriOpt />
        </Route>
        <Route path="/sign-in/enter-code">
          <SignInVeriEnterCode />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
