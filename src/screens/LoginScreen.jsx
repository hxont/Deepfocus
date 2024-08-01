import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import kakao from '../../assets/login_kakao.png';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View
        style={{
          flex: 0.8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 100}}>📖</Text>
        <Text style={{fontSize: 20, marginBottom: '10%'}}>
          지금부터 딥포커스 시작
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={kakao} style={{width: 200}} />
        </TouchableOpacity>
      </View>
    );
  }
}
