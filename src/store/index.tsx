import React, { useReducer, useContext, FunctionComponent } from 'react';

import useCombinedReducers from '../utils/useCombinedReducers';
import StoreContext from './types';

import jobReducer, { jobInitialState } from './job/reducer';

const StoreProvider: FunctionComponent = ({ children }) => {
  const [store, dispatch] = useCombinedReducers({
    //@ts-ignore
    jobState: useReducer(jobReducer, jobInitialState)
  });

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export { StoreProvider, useStore };
