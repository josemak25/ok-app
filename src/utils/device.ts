import { Dimensions, Platform } from 'react-native';

const device = Dimensions.get('window');
let scale: number = 1;

switch (Platform.OS) {
  case 'android':
    if (device.width <= 414) {
      //Android smartphones
      scale = device.width / 414;
    }
    break;

  case 'ios':
    switch (device.width) {
      //iPhone4/4S and iPhone5/5S
      case 320:
        scale = 0.77;
        break;
      //iPhone6/6S
      case 375:
        scale = 0.902;
        break;
      //iPhone6plus/6Splus
      case 414:
        scale = 1;
        break;
      //iPad
      default:
        scale;
    }
    break;
  default:
    scale;
}

const DEVICE_FULL_WIDTH = Math.ceil(device.width);
const DEVICE_FULL_HEIGHT = Math.ceil(device.height);

export default { scale, DEVICE_FULL_WIDTH, DEVICE_FULL_HEIGHT };
