import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList, Pressable, Image} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import axios from 'axios';
import {useTrendingData} from '../context/useTrendingData';
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../App';
import {useNavigation} from '@react-navigation/native';
import uuid from 'react-native-uuid';

export const Search = () => {
  const {trendingData} = useTrendingData();
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchData, setSearchData] = useState([]);

  const Handler = () => {
    if (currentPage >= totalPage) {
      null;
      return;
    } else {
      setCurrentPage(currentPage + 1);
      // console.log(currentPage);
    }
    setCurrentPage(currentPage + 1);
  };

  const _handleRefresh = async () => {
    getMovies();
    setQuery('');
    setCurrentPage(1);
  };
  const getMovies = useCallback(async () => {
    if (query.length > 1) {
      await axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=ed4d0b71ec1410c175bdf290da97bd9f&language=en-US&query=${query}&${currentPage}=1&include_adult=false`,
        )
        .then(response => {
          if (currentPage === 1) {
            setTotalPage(response.data.total_pages);
            setSearchData(response.data.results);
          } else {
            setSearchData([...searchData, ...response.data.results]);
          }
          // console.log(response.data, 'response');
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      setTotalPage(0);
      setSearchData(trendingData);
    }
  }, [query, currentPage]);
  const PopularListView = ({item, index}) => {
    return (
      <View style={{margin: 10}}>
        <Pressable
          onPress={() => {
            navigation.navigate({
              name: 'Info',
              params: item,
            });
          }}>
          <View key={index}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Image
                //   source={{uri: 'https://reactjs.org/logo-og.png'}}
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
                  // uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
                }}
                // style={styles.image}
                style={{
                  width: 80,
                  height: 100,
                  borderRadius: 8,
                  resizeMode: 'cover',
                }}
              />
              <View style={{marginHorizontal: 20}}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: DEVICE_WIDTH * 0.03,
                    fontWeight: 'bold',
                    marginTop: DEVICE_HEIGHT * 0.015,
                  }}>
                  {item.title}
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('./../assets/Login/20-gold-star-png-image.png')}
                    style={{width: 15, height: 15}}
                  />
                  <Text
                    style={{
                      color: 'grey',
                      fontSize: 14,
                      marginHorizontal: 5,
                    }}>
                    {item.vote_average}/10 IMDb
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </Pressable>
      </View>
    );
  };
  useEffect(() => {
    getMovies();
  }, [getMovies]);
  return (
    <View style={styles.container}>
      <SearchBar
        onChangeText={text => setQuery(text)}
        onPress={getMovies}
        onClearPress={() => setQuery('')}
      />
      <View>
        <FlatList
          data={searchData}
          renderItem={PopularListView}
          initialNumToRender={10}
          onEndReachedThreshold={0.01}
          refreshing={false}
          onEndReached={Handler}
          onRefresh={_handleRefresh}
          keyExtractor={() => uuid.v4()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: DEVICE_HEIGHT * 0.1,
  },
  image: {
    borderRadius: 8,
  },
  header: {
    color: '#222',
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
    opacity: 0.8,
  },
});
