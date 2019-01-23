import React, { Component } from 'react';
import MapView from 'react-native-maps';
import Search from '../Search';
import Directions from '../Directions';

import { View, Alert, Dimensions } from 'react-native';

// import styles from './styles';

export default class Map extends Component {
  state = {
    region: null,
    destination: null
  };

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134
          }
        });
        // console.log(this.state);
      }, //sucesso
      () => {
        Alert.alert(
          'Erro',
          'Não foi possivel buscar sua localização tente novamente.'
        );
      }, //erro
      {
        timeout: 5000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    );
  }

  handleLocationSelected = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude }
    } = geometry;

    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text
      }
    });
  };

  render() {
    const { region, destination } = this.state;
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={region}
          showUserLocation
          loadingEnabled
          showsMyLocationButton
          showsUserLocation
          followsUserLocation
        >
          {destination && (
            <Directions
              origin={region}
              destination={destination}
              onReady={() => {
              }}
            />
          )}
        </MapView>
        <Search onLocationSelected={this.handleLocationSelected} />
      </View>
    );
  }
}
