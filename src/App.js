import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BaselinePreferenceHandler from './BaselinePreferenceHandler';
import Home from './Home';
import DataRequests from './DataRequests';

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
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
