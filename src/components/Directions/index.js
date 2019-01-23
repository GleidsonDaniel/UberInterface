import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    origin={origin}
    destination={destination}
    onReady={onReady}
    apikey="AIzaSyBaJhCMghi_YcCr52-duoJkdUc4WR1twE0"
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
