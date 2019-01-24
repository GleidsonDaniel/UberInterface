import React, { Component } from 'react';
import { Animated } from 'react-native';

import {
  Container,
  TypeImage,
  TypeTitle,
  TypeDescription,
  RequestButton,
  RequestButtonText
} from './styles';

import uberx from '../../assets/uberx.png';

const AnimatedContainer = Animated.createAnimatedComponent(Container);

export default class Details extends Component {
  state = {
    position: new Animated.Value(300)
  };

  componentDidMount() {
    Animated.timing(this.state.position, {
      duration: 500,
      toValue: 0
    }).start();
  }

  render() {
    return (
      <AnimatedContainer
        style={{
          transform: [{ translateY: this.state.position }]
        }}
      >
        <TypeTitle>Popular</TypeTitle>
        <TypeDescription>Viagens baratas para o dia a dia</TypeDescription>

        <TypeImage source={uberx} />
        <TypeTitle>UberX</TypeTitle>
        <TypeDescription>R$6,00</TypeDescription>

        <RequestButton onPress={() => {}}>
          <RequestButtonText>SOLICITAR UBERX</RequestButtonText>
        </RequestButton>
      </AnimatedContainer>
    );
  }
}
