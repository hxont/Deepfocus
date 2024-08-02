import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import GoBackBtn from '../components/GoBackBtn';

class BookTreeScreen extends Component {
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

export default BookTreeScreen;
