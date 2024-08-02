import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;

    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.titleWrapper}>
            <Text style={{fontSize: 20}}>딥포커스 🔥</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('ProfileScreen')}>
              <Icon name="user-astronaut" size={30} color="#666666" />
            </TouchableOpacity>
          </View>
          <View style={styles.bookTreeBtnWrapper}>
            <TouchableOpacity
              style={styles.bookTreeBtn}
              onPress={() => navigation.navigate('BookTreeScreen')}>
              <Text style={{marginLeft: 30}}>🌳 나만의 독서 나무 확인하기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.titleWrapper}>
            <Text style={{fontSize: 20}}>나의 도서</Text>
          </View>
          <View style={styles.textFieldWrapper}>
            <TextInput
              style={styles.textField}
              placeholder="나의 도서를 검색해보세요!"
            />
          </View>
          <View style={styles.AddBookBtnWrapper}>
            <TouchableOpacity
              style={styles.AddBookBtn}
              onPress={() => navigation.navigate('SearchBookScreen')}>
              <Text style={{fontSize: 40, color: 'grey'}}>+</Text>
              <Text style={{color: 'grey'}}>책을 선택해주세요!</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.seperateLine}></View>
          <View style={styles.titleWrapper}>
            <Text style={{fontSize: 20}}>완독 도서</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={{fontSize: 12, color: 'grey'}}>
              아직은 완독한 도서가 없어요.{'\n'}
              책을 완독해주세요!
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  titleWrapper: {
    //backgroundColor: 'pink',
    height: 80,
    marginHorizontal: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bookTreeBtnWrapper: {
    //backgroundColor: 'skyblue',
    height: 60,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookTreeBtn: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.2,
    justifyContent: 'center',
  },
  textFieldWrapper: {
    //backgroundColor: 'skyblue',
    height: 60,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textField: {
    width: '100%',
    height: '100%',
    borderColor: '#666666',
    borderWidth: 0.3,
    borderRadius: 5,
    paddingHorizontal: 20,
    fontSize: 14,
  },
  AddBookBtnWrapper: {
    //backgroundColor: 'skyblue',
    height: 160,
    marginHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  AddBookBtn: {
    width: '100%',
    height: '80%',
    backgroundColor: 'lightgrey',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperateLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  textWrapper: {
    //backgroundColor: 'skyblue',
    height: 40,
    justifyContent: 'center',
    marginHorizontal: 40,
  },
});
export default HomeScreen;
