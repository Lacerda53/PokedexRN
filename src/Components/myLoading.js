import React, { Component } from 'react';
import { View, Image } from 'react-native';
import Gif from '~/assets/pokeball.gif';

export default class MyLoading extends Component {
  render() {
    return (
      <View style={{flex: 1 //(this.props.animating) ? 1 : 0}}
    }}>
        <Image source={Gif} style={{
          flex: 1, justifyContent: "center", alignItems: "center", width: 300, height:300}}/>
      </View>
    );
  }
}
