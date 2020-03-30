import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TestContextProvider } from './store/TestContext';
import Home from './screens/Home';
import Test from './screens/Test';
import Result from './screens/Result';
import Advices from './components/Advices';

function App() {
  return (
    <Switch>
      <TestContextProvider>
        <Route path="/" component={Home} exact />
        <Route path="/test" component={Test} />
        <Route path="/result" component={Result} />
        <Advices />
      </TestContextProvider>
    </Switch>
  );
}

export default App;
