// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   StyleSheet,
//   Text,
//   Button,
//   ActivityIndicator,
//   FlatList,
//   Pressable,
//   Image,
//   TouchableOpacity,
// } from 'react-native';
// import {DEVICE_WIDTH, DEVICE_HEIGHT} from '../App';
// import {useNavigation} from '@react-navigation/native';

// export const TrendingListView = ({item, index}) => {
//   const navigation = useNavigation();
//   return (
//     <View style={{margin: 10}}>
//       <Pressable
//         onPress={() => {
//           navigation.navigate({
//             name: 'Edit Card',
//             // params: item,
//           });
//         }}>
//         <View style={styles.container} key={index}>
//           <View style={{width: 200}}>
//             <Image
//               //   source={{uri: 'https://reactjs.org/logo-og.png'}}
//               source={{
//                 uri: `https://image.tmdb.org/t/p/original/${item.backdrop_path}`,
//                 // uri: 'https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png',
//               }}
//               // style={styles.image}
//               style={{
//                 width: 200,
//                 height: 300,
//                 borderRadius: 8,
//                 resizeMode: 'cover',
//               }}
//             />
//             <Text
//               style={{
//                 color: '#000',
//                 fontSize: DEVICE_WIDTH * 0.04,
//                 fontWeight: 'bold',
//                 marginTop: DEVICE_HEIGHT * 0.02,
//                 // width: 300,
//               }}>
//               {item.title}
//             </Text>
//           </View>
//         </View>

//         <View
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             alignItems: 'center',
//           }}>
//           <Image
//             source={require('./../assets/Login/20-gold-star-png-image.png')}
//             style={{width: 15, height: 15}}
//           />
//           <Text style={{color: 'grey', fontSize: 14, marginHorizontal: 5}}>
//             {item.vote_average}/10 IMDb
//           </Text>
//         </View>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 3,
//     },
//     shadowOpacity: 0.29,
//     shadowRadius: 4.65,
//     // elevation: 7,
//     // marginTop: 50,
//   },
//   image: {
//     // width: DEVICE_WIDTH * 0.5,
//     // height: DEVICE_HEIGHT * 0.3,
//     borderRadius: 8,
//     // resizeMode: 'cover',
//   },
//   header: {
//     color: '#222',
//     color: 'white',
//     fontSize: 28,
//     fontWeight: 'bold',
//     paddingLeft: 20,
//     paddingTop: 20,
//     opacity: 0.8,
//   },

//   body: {
//     color: '#222',
//     fontSize: 18,
//     paddingLeft: 20,
//     paddingLeft: 20,
//     paddingRight: 20,
//     color: 'white',
//     opacity: 0.8,
//   },
//   cardElement: {
//     display: 'flex',
//     fontSize: 20,
//     fontWeight: 'bold',
//     borderWidth: 1,
//     borderColor: '#000',
//     height: 300,

//     borderRadius: 20,
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     color: '#000',
//   },

//   overlay: {
//     position: 'absolute',
//     top: 0,
//     right: 0,
//     bottom: 0,
//     left: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.2)',
//     borderRadius: 8,
//   },
// });
