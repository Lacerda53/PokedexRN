import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Gif from '~/assets/pokeball.gif';

export default class Components extends Component {
  render() {
    return (
      <View style={{opacity: (this.props.show) ? 1 : 0}}>
        <Image source={Gif}/>
      </View>
    );
  }
}
