import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import GoBackBtn from '../components/GoBackBtn';
import bookImage from '../../assets/test_book.png';

class BookDetailScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.header}>
            <GoBackBtn navigation={navigation} />
            <Text style={styles.headerText}>도서 정보</Text>
          </View>
          <View style={styles.bookItemWrapper}>
            <View style={styles.bookImageWrapper}>
              <Image source={bookImage} style={styles.bookImage} />
            </View>
            <View style={styles.bookInfoWrapper}>
              <View style={styles.bookTitleWrapper}>
                <Text style={{fontSize: 15}}>너의 저녁에 나를 1</Text>
              </View>
              <View style={styles.bookBtnInfoWrapper}>
                <View style={styles.authorInfoWrapper}>
                  <Text style={{fontSize: 10, marginVertical: 5}}>이기형</Text>
                  <Text style={{fontSize: 10, marginVertical: 5}}>
                    신영미디어
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.readingBtnWrapper}>
            <TouchableOpacity style={styles.bookTimerBtn}>
              <Text>⏰ 독서 타이머</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookMemoBtn}>
              <Text>📒 독서 메모장</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.seperateLine}></View>
          <View style={styles.buttonInfoWrapper}>
            <Text style={{fontSize: 15}}>나의 독서 타이머</Text>
            <TouchableOpacity>
              <Text style={{textDecorationLine: 'underline'}}>더보기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.timerRecordWrapper}>
            <View style={styles.timerRecord}>
              <Text style={{color: 'grey', fontSize: 12}}>
                아직 기록한{'\n'}시간이 없어요.
              </Text>
            </View>
            <View style={styles.timerRecord}>
              <Text style={{color: 'grey', fontSize: 12}}>
                아직 기록한{'\n'}시간이 없어요.
              </Text>
            </View>
            <View style={styles.timerRecord}>
              <Text style={{color: 'grey', fontSize: 12}}>
                아직 기록한{'\n'}시간이 없어요.
              </Text>
            </View>
          </View>
          <View style={styles.seperateLine}></View>
          <View style={styles.buttonInfoWrapper}>
            <Text style={{fontSize: 15}}>나의 독서 메모장</Text>
            <TouchableOpacity>
              <Text style={{textDecorationLine: 'underline'}}>더보기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.memoRecordWrapper}>
            <View style={styles.memoRecord}>
              <Text style={{marginLeft: 30, color: 'grey'}}>
                아직 기록되지 않았어요
              </Text>
            </View>
            <View style={styles.memoRecord}>
              <Text style={{marginLeft: 30, color: 'grey'}}>
                아직 기록되지 않았어요
              </Text>
            </View>
            <View style={styles.memoRecord}>
              <Text style={{marginLeft: 30, color: 'grey'}}>
                아직 기록되지 않았어요
              </Text>
            </View>
          </View>
        </ScrollView>
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
  headerText: {
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
    position: 'relative',
    marginRight: 40,
  },
  bookItemWrapper: {
    //backgroundColor: 'pink',
    height: 150,
    marginHorizontal: 40,
    marginTop: 20,
    flexDirection: 'row',
  },
  bookImageWrapper: {
    width: '35%',
    height: '100%',
  },
  bookImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  bookInfoWrapper: {
    //backgroundColor: 'blue',
    marginHorizontal: 15,
    width: '55%',
  },
  bookTitleWrapper: {
    //backgroundColor: 'red',
    height: '70%',
    width: '100%',
  },
  bookBtnInfoWrapper: {
    //backgroundColor: 'grey',
    height: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  authorInfoWrapper: {
    //backgroundColor: 'purple',
    justifyContent: 'center',
    width: '50%',
  },
  readingBtnWrapper: {
    //backgroundColor: 'blue',
    height: 60,
    marginHorizontal: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
  },
  bookTimerBtn: {
    width: '48%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookMemoBtn: {
    width: '48%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperateLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#D9D9D9',
  },
  buttonInfoWrapper: {
    //backgroundColor: 'pink',
    height: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  timerRecordWrapper: {
    //backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginBottom: 30,
  },
  timerRecord: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgrey',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  memoRecordWrapper: {
    //backgroundColor: 'skyblue',
    height: 180,
    marginHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  memoRecord: {
    width: '100%',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 5,
    shadowOpacity: 0.2,
    justifyContent: 'center',
    marginVertical: 5,
  },
});

export default BookDetailScreen;
