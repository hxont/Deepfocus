import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
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
        <View style={styles.header}>
          <GoBackBtn navigation={navigation} />
        </View>
        <Text>내 정보</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    //backgroundColor: 'pink',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
  },
});

export default ProfileScreen;
