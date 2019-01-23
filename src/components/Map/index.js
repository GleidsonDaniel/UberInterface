import React, { Component } from 'react';
import MapView from 'react-native-maps';
import Search from '../Search';

import { View, Alert, Dimensions } from 'react-native';

// import styles from './styles';

export default class Map extends Component {
  state = {
    region: null
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
        timeout: 2000,
        enableHighAccuracy: true,
        maximumAge: 1000
      }
    );
  }

  render() {
    const { region } = this.state;
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
        />
        {/* <Search /> */}
      </View>
    );
  }
}
