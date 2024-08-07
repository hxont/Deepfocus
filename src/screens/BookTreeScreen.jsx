import React, {Component} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import GoBackBtn from '../components/GoBackBtn';

class BookTreeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <View style={styles.header}>
          <GoBackBtn navigation={navigation} />
          <Text style={styles.headerText}>독서 나무</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={{fontSize: 18}}>책을 읽을 수록 나무가 자라나요</Text>
        </View>
        <View style={styles.tree}>
          <Text style={{fontSize: 50}}>🌱</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text>나무를 무럭무럭 키워보세요 💧</Text>
        </View>
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
    marginBottom: 50,
  },
  headerText: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    position: 'relative',
    marginRight: 40,
  },
  textWrapper: {
    //backgroundColor: 'blue',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  tree: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default BookTreeScreen;
