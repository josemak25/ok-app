import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { IconProps } from './types';

export default function CustomerIcon(props: IconProps) {
  return (
    <Svg width="50%" height="50%" viewBox="0 0 26.202 25.717" {...props}>
      <G data-name="Group 37">
        <G data-name="Group 35">
          <Path
            data-name="Path 45"
            d="M20.345 18.099h3.574v-7.28a10.766 10.766 0 00-2.347-6.721l-1.921.576-.263 1.604a7.715 7.715 0 011.469 4.537v2.382z"
            fill="#dc4b4b"
          />
          <Path
            data-name="Path 46"
            d="M2.284 10.819V18.1h3.574l-.512-4.9v-2.381a7.715 7.715 0 011.467-4.541l-.809-1.6-1.375-.576a10.766 10.766 0 00-2.345 6.717z"
            fill="#0ed678"
          />
        </G>
        <G data-name="Group 36">
          <Path
            data-name="Path 47"
            d="M13.101 0l-.546 1.945.546 1.117a7.751 7.751 0 016.288 3.22l2.184-2.184A10.8 10.8 0 0013.101 0z"
            fill="#fdae02"
          />
          <Path
            data-name="Path 48"
            d="M13.101 0a10.8 10.8 0 00-8.472 4.1l2.184 2.184a7.752 7.752 0 016.288-3.22z"
            fill="#fdcb02"
          />
        </G>
      </G>
      <G data-name="Group 38">
        <Path
          data-name="Path 49"
          d="M4.577 14.881a4.577 4.577 0 000 9.154h1.974v-9.154z"
          fill="#28485e"
        />
        <Path
          data-name="Path 50"
          d="M5.904 13.2h-.56v12.515h.56a3.584 3.584 0 003.58-3.58v-5.357a3.584 3.584 0 00-3.58-3.578z"
          fill="#ebe1dc"
        />
      </G>
      <G data-name="Group 39">
        <Path
          data-name="Path 51"
          d="M21.626 14.881a4.577 4.577 0 110 9.154h-1.974v-9.154z"
          fill="#1b303e"
        />
        <Path
          data-name="Path 52"
          d="M20.299 13.2h.56v12.515h-.56a3.584 3.584 0 01-3.58-3.58v-5.357a3.584 3.584 0 013.58-3.578z"
          fill="#dcd2cd"
        />
      </G>
    </Svg>
  );
}
