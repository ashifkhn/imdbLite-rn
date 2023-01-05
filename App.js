import StackNavigator from './navigator/StackNavigator';
import {Dimensions, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AuthenticationContextProvider} from './context/useAuth';
import {TrendingDataContextProvider} from './context/useTrendingData';

export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const DEVICE_WIDTH = Dimensions.get('window').width;

function App({navigation}) {
  // console.log(navigation);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <AuthenticationContextProvider>
        <TrendingDataContextProvider>
          <StackNavigator />
        </TrendingDataContextProvider>
      </AuthenticationContextProvider>
    </GestureHandlerRootView>
  );
}

export default App;
