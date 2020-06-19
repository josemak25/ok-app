import { Dimensions } from 'react-native';

const device = Dimensions.get('window');

const DEVICE_FULL_WIDTH = Math.ceil(device.width);
const DEVICE_FULL_HEIGHT = Math.ceil(device.height);

export default { DEVICE_FULL_WIDTH, DEVICE_FULL_HEIGHT };
