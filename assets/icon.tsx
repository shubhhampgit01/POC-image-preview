import {View, Text} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';

const ArrowIcon = ({width = 10, height = 6, color = '#A799FF'}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 10 6" fill="none">
      <Path
        d="M9 5L5 1L0.999999 5"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default ArrowIcon;
