import React, { createContext, useReducer } from 'react';
import testState from './state';
import reducer from './reducer';

export const TestContext = createContext();

export const TestContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, testState);
  const { children } = props;

  return <TestContext.Provider value={[state, dispatch]}>{children}</TestContext.Provider>;
};
