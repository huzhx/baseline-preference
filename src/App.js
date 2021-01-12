import { BrowserRouter, Switch, Route } from 'react-router-dom';

import BaselinePreferenceHandler from './BaselinePreferenceHandler';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/baseline-preference">
          <BaselinePreferenceHandler />;
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
