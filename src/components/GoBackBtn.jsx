import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class GoBackBtn extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Icon
          name="chevron-back-outline"
          size={30}
          color="#666666"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {marginLeft: 10},
});

export default GoBackBtn;
