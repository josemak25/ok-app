//@ts-nocheck
import { DATABASE_URI } from 'react-native-dotenv';

export type ENV_VARIABLES_TYPES = { DATABASE_URI: string };

// database and api config
const ENVIRONMENT_VARIABLES = { DATABASE_URI } as ENV_VARIABLES_TYPES;

export default ENVIRONMENT_VARIABLES;
