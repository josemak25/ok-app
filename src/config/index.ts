//@ts-nocheck
import { DATABASE_URI } from 'react-native-dotenv';
import Reactotron from 'reactotron-react-native';

export type ENV_VARIABLES_TYPES = { DATABASE_URI: string };

// database and api config
const ENVIRONMENT_VARIABLES = { DATABASE_URI } as ENV_VARIABLES_TYPES;

export default ENVIRONMENT_VARIABLES;

if (__DEV__) {
  Reactotron.configure({ name: 'OkApp' }).useReactNative().connect();

  // Extend console with tron for being able to debug to Reactotron
  console.tron = Reactotron.log;
}

declare global {
  interface Console {
    tron(param?: any, ...optionalParams: any[]): void;
  }
}
