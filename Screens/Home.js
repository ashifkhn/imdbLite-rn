import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  ActivityIndicator,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../App';
import {SectionHeader} from '../components/SectionHeader';
import {useTrendingData} from '../context/useTrendingData';

const Home = ({navigation}) => {
  const [trendingList, setTrendinglist] = useState([]);
  const [popuarList, setPopularList] = useState([]);
  const {setTrendingData} = useTrendingData();

  const [loader, setLoader] = useState(true);

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
                  width: 100,
                  height: 150,
                  borderRadius: 8,
                  resizeMode: 'cover',
                }}
              />
              <View style={{marginHorizontal: 20}}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: DEVICE_WIDTH * 0.04,
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
                    style={{color: 'grey', fontSize: 14, marginHorizontal: 5}}>
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
  const TrendingListView = ({item, index}) => {
    return (
      <View style={{margin: 10}}>
        <Pressable
          onPress={() => {
            navigation.navigate({
              name: 'Info',
              params: item,
            });
          }}>
          <View style={styles.container} key={index}>
            <View style={{width: 200}}>
              <Image
                //   source={{uri: 'https://reactjs.org/logo-og.png'}}
                source={{
                  uri: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
                  // uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
                }}
                // style={styles.image}
                style={{
                  width: 200,
                  height: 300,
                  borderRadius: 8,
                  resizeMode: 'cover',
                }}
              />
              <Text
                style={{
                  color: '#000',
                  fontSize: DEVICE_WIDTH * 0.04,
                  fontWeight: 'bold',
                  marginTop: DEVICE_HEIGHT * 0.02,
                  // width: 300,
                }}>
                {item.title}
              </Text>
            </View>
          </View>

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
            <Text style={{color: 'grey', fontSize: 14, marginHorizontal: 5}}>
              {item.vote_average}/10 IMDb
            </Text>
          </View>
        </Pressable>
      </View>
    );
  };

  const getMovies = async () => {
    await axios
      .get(
        'https://api.themoviedb.org/3//trending/movie/day?api_key=ed4d0b71ec1410c175bdf290da97bd9f',
      )
      .then(response => {
        setTrendinglist(response.data.results);
        setTrendingData(response.data.results);
      });
    await axios
      .get(
        'https://api.themoviedb.org/3/movie/top_rated?api_key=ed4d0b71ec1410c175bdf290da97bd9f&language=en-US&page=1',
      )
      .then(response => {
        console.log(response.data.results);
        setPopularList(response.data.results);
        setLoader(false);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: DEVICE_WIDTH * 0.04,
      }}>
      {loader ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <ActivityIndicator animating style={{height: 80}} size="large" />
        </View>
      ) : (
        <View style={{}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 50,
              alignItems: 'center',
              // backgroundColor: '#000',
            }}>
            <Image
              source={require('./../assets/header/1793793-200.png')}
              style={{width: 40, height: 40}}
            />
            <Text style={{color: '#000'}}>IMDbLite</Text>
            <Image
              source={require('./../assets/header/icons8-notification-64.png')}
              style={{width: 30, height: 30}}
            />
          </View>
          <View>
            <View>
              <SectionHeader title="Now Showing" option="See More" />
              <FlatList
                data={trendingList}
                renderItem={TrendingListView}
                horizontal
              />
            </View>
            <View>
              <SectionHeader title="Popular" option="See More" />
              <FlatList data={popuarList} renderItem={PopularListView} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    // elevation: 7,
    // marginTop: 50,
  },
  image: {
    // width: DEVICE_WIDTH * 0.5,
    // height: DEVICE_HEIGHT * 0.3,
    borderRadius: 8,
    // resizeMode: 'cover',
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

  body: {
    color: '#222',
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    color: 'white',
    opacity: 0.8,
  },
  cardElement: {
    display: 'flex',
    fontSize: 20,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: '#000',
    height: 300,

    borderRadius: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 8,
  },
});
