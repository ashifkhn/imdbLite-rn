import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../App';

const InfoScreen = ({route, navigation}) => {
  const {
    overview,
    title,
    release_date,
    vote_average,
    vote_count,
    media_type,
    poster_path,
  } = route.params;
  console.log(route.params);
  return (
    <View style={{padding: 10, backgroundColor: '#fff', flex: 1}}>
      <View style={styles.container}>
        <View>
          <Image
            //   source={{uri: 'https://reactjs.org/logo-og.png'}}
            source={{
              uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
              // uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
            }}
            // style={styles.image}
            style={{
              height: 300,
              resizeMode: 'cover',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
            }}
          />
          <View
            style={{
              backgroundColor: '#fff',
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              marginTop: -20,
            }}>
            <Text
              style={{
                color: '#000',
                fontSize: DEVICE_WIDTH * 0.06,
                fontWeight: 'bold',
                marginTop: DEVICE_HEIGHT * 0.02,
                // width: 300,
              }}>
              {title}
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
              <Text style={{color: 'grey', fontSize: 14, marginHorizontal: 5}}>
                {vote_average}/10 IMDb
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  backgroundColor: 'rgba(158, 150, 150, 1)',
                  color: '#000',

                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: 'rgba(158, 150, 150, 1)',
                  textAlign: 'center',

                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  fontSize: 12,
                  width: 100,
                  marginHorizontal: 5,
                }}>
                length
              </Text>
              <Text
                style={{
                  backgroundColor: 'rgba(158, 150, 150, 1)',
                  color: '#000',

                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: 'rgba(158, 150, 150, 1)',
                  textAlign: 'center',

                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  fontSize: 12,
                  width: 100,
                  marginHorizontal: 5,
                }}>
                length
              </Text>
              <Text
                style={{
                  backgroundColor: 'rgba(158, 150, 150, 1)',
                  color: '#000',

                  borderWidth: 1,
                  borderRadius: 20,
                  borderColor: 'rgba(158, 150, 150, 1)',
                  textAlign: 'center',

                  paddingVertical: 5,
                  paddingHorizontal: 15,
                  fontSize: 12,
                  width: 100,
                  marginHorizontal: 5,
                }}>
                length
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: 'rgba(158, 150, 150, 1)',
                  fontSize: DEVICE_WIDTH * 0.05,
                  fontWeight: 'bold',
                  marginTop: DEVICE_HEIGHT * 0.02,
                }}>
                Discription
              </Text>
              <Text
                style={{
                  color: '#000',
                  fontSize: DEVICE_WIDTH * 0.03,
                  // fontWeight: 'bold',
                  marginTop: DEVICE_HEIGHT * 0.02,
                  // width: 300,
                }}>
                {overview}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: 'rgba(158, 150, 150, 1)',
                  fontSize: DEVICE_WIDTH * 0.05,
                  fontWeight: 'bold',
                  marginTop: DEVICE_HEIGHT * 0.02,
                  // width: 300,
                }}>
                Cast
              </Text>
              <Text
                style={{
                  color: 'rgba(158, 150, 150, 1)',
                  fontSize: DEVICE_WIDTH * 0.03,
                  // fontWeight: 'bold',
                  marginTop: DEVICE_HEIGHT * 0.02,
                  // width: 300,
                }}>
                No Info Available
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

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

export default InfoScreen;
