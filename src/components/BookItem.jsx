import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

class BookItem extends Component {
  constructor(props) {
    super(props);
    this.title = this.props.title;
    this.author = this.props.author;
    this.publisher = this.props.publisher;
    this.image = this.props.image;
  }

  // 1. 책 추가하기 버튼 클릭시 발생
  onAddBookBtnClicked = () => {
    let formData = {title: this.title};

    this.callAddBookAPI(formData).then(response => {
      this.goAlert();
    });
  };

  goAlert = () => {
    Alert.alert('책 추가 완료!', '나의 도서 바로가기', [
      {
        text: '확인',
      },
      {
        text: '더보기',
      },
    ]);
  };

  // 2. 책 추가 api 호출
  async callAddBookAPI(data) {
    //const manager = new WebServiceManager(Constant.serviceURL + "/AddBook", "post");\
    //manager.addFormData("data", data);
    //const response = await manager.start();
    //if (response.ok)
    //  return response.json();
    //return Promise.reject();
  }

  render() {
    return (
      <View style={styles.bookItemWrapper}>
        <View style={styles.bookImageWrapper}>
          <Image source={this.image} style={styles.bookImage} />
        </View>
        <View style={styles.bookInfoWrapper}>
          <View style={styles.bookTitleWrapper}>
            <Text style={{fontSize: 16}}>{this.title}</Text>
          </View>
          <View style={styles.bookBtmInfoWrapper}>
            <View style={styles.authorInfoWrapper}>
              <Text style={{fontSize: 12, marginVertical: 5}}>
                {this.author}
              </Text>
              <Text style={{fontSize: 12, marginVertical: 5}}>
                {this.publisher}
              </Text>
            </View>
            <View style={styles.bookAddBtnWrapper}>
              <TouchableOpacity
                style={styles.bookAddBtn}
                onPress={this.onAddBookBtnClicked}>
                <Text>추가하기</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bookItemWrapper: {
    //backgroundColor: 'pink',
    height: 180,
    marginHorizontal: 40,
    marginTop: 20,
    flexDirection: 'row',
  },
  bookImageWrapper: {
    width: '40%',
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
  bookAddBtnWrapper: {
    width: '50%',
  },
  bookAddBtn: {
    width: '100%',
    height: '100%',
    borderColor: '#666666',
    borderWidth: 0.3,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BookItem;
