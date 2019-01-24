import React from 'react';
import MapViewDirections from 'react-native-maps-directions';
import Config from 'react-native-config'

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    origin={origin}
    destination={destination}
    onReady={onReady}
    apikey={Config.API_KEY}
    strokeWidth={3}
    strokeColor="#222"
  />
);

export default Directions;
