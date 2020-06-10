import { createContext, Dispatch } from 'react';

import { jobInitialState } from './job/reducer';

import { JobInitialState, JobAction } from './job/types';

// We define our type for the context properties right here
export type DispatchTypes = JobAction;

// We define our type for the context properties right here
interface ContextProps {
  store: { jobState: JobInitialState };
  dispatch?: Dispatch<DispatchTypes>;
}

const StoreContext = createContext<ContextProps>({
  store: { jobState: jobInitialState }
});

export default StoreContext;
