import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import GoBackBtn from '../components/GoBackBtn';

class BookDetailScreen extends Component {
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

export default BookDetailScreen;
