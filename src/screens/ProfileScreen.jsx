import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GoBackBtn from '../components/GoBackBtn';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <View>
          <GoBackBtn navigation={navigation} />
        </View>
      </SafeAreaView>
    );
  }
}

export default ProfileScreen;
