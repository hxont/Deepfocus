import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GoBackBtn from '../components/GoBackBtn';

class SearchBookScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <GoBackBtn navigation={navigation} />
      </SafeAreaView>
    );
  }
}

export default SearchBookScreen;
