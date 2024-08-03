import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
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
            <View style={styles.bookBtmInfoWrapper}>
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
          <TouchableOpacity
            style={styles.bookTimerBtn}
            onPress={() => navigation.navigate('BookTreeScreen')}>
            <Text>⏰ 독서 타이머</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bookMemoBtn}
            onPress={() => navigation.navigate('BookTreeScreen')}>
            <Text>📒 독서 메모장</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.seperateLine}></View>
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
  bookBtmInfoWrapper: {
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
});

export default BookDetailScreen;
