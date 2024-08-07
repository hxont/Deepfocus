import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
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
        <Text
          style={{
            marginLeft: 20,
            marginTop: 10,
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          내 정보
        </Text>
        <View style={styles.profileWrapper}>
          <View style={styles.profileImageWrapper}>
            <View style={styles.profileImage}></View>
          </View>
          <View style={styles.profileNameWrapper}>
            <Text style={{fontSize: 20}}>책 읽는 사람</Text>
          </View>
          <View style={styles.logoutBtnWrapper}>
            <TouchableOpacity style={styles.logoutBtn}>
              <Text>로그아웃</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.seperateLine}></View>
        <View style={styles.recordTitle}>
          <Text style={{fontSize: 20}}>독서 기록</Text>
        </View>
        <View style={styles.recordContent}>
          <Text style={{fontSize: 15}}>총 0건의 독서를 완료했어요</Text>
        </View>
        <View style={styles.recordContainerWrapper}>
          <View style={styles.recordContainer}>
            <Text style={{fontSize: 18}}>0초</Text>
            <Text style={{fontSize: 12, color: 'grey', marginTop: 5}}>
              총 독서 시간
            </Text>
          </View>
          <View style={styles.recordContainer}>
            <Text style={{fontSize: 18}}>0일</Text>
            <Text style={{fontSize: 12, color: 'grey', marginTop: 5}}>
              전체 독서 일자
            </Text>
          </View>
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
  },
  profileWrapper: {
    //backgroundColor: 'pink',
    marginHorizontal: 20,
    marginVertical: 20,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImageWrapper: {
    //backgroundColor: 'blue',
    width: 100,
  },
  profileImage: {
    backgroundColor: 'black',
    borderRadius: 50,
    width: '100%',
    height: '100%',
  },
  profileNameWrapper: {
    //backgroundColor: 'red',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoutBtnWrapper: {
    //backgroundColor: 'grey',
    height: 40,
    flex: 1,
    alignItems: 'flex-end',
  },
  logoutBtn: {
    //backgroundColor: 'white',
    width: '80%',
    height: '100%',
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperateLine: {
    width: '100%',
    height: 10,
    backgroundColor: '#D9D9D9',
  },
  recordTitle: {
    //backgroundColor: 'skyblue',
    height: 40,
    marginHorizontal: 30,
    marginTop: 20,
    justifyContent: 'center',
  },
  recordContent: {
    //backgroundColor: 'blue',
    height: 30,
    marginHorizontal: 30,
    justifyContent: 'center',
  },
  recordContainerWrapper: {
    //backgroundColor: 'pink',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginVertical: 20,
  },
  recordContainer: {
    backgroundColor: 'white',
    width: 160,
    height: '100%',
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
