import React, {Component} from 'react';
import {
  SafeAreaView,
  TextInput,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import GoBackBtn from '../components/GoBackBtn';
import BookItem from '../components/BookItem';
import testImage from '../../assets/test_book.png';

class SearchBookScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookitem: [
        {
          id: 1,
          title: '나의 저녁에 나를1',
          image: testImage,
          author: '이기형',
          publisher: '신영미디어',
        },
      ],
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <GoBackBtn navigation={navigation} />
        <View style={styles.textFieldWrapper}>
          <TextInput
            style={styles.textField}
            placeholder="읽을 도서를 검색해보세요!"
          />
        </View>
        <FlatList
          data={this.state.bookitem}
          renderItem={({item}) => (
            <BookItem
              title={item.title}
              author={item.author}
              publisher={item.publisher}
              image={item.image}
            />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textFieldWrapper: {
    //backgroundColor: 'skyblue',
    height: 60,
    marginHorizontal: 40,
    marginVertical: 10,
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
});

export default SearchBookScreen;
