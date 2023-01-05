import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MyCards} from '../../Screens/MyCards/MyCards';
import Home from '../Screens/Home';
import {Search} from '../Screens/Search';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Tab.Screen name="Dialer" component={Dialer} />/ */}

      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      {/* <Tab.Screen name="Create Contact" component={CreateContactScreen} /> */}
      {/* <Tab.Screen name="Create Card" component={CreateCard} /> */}
      {/* <Tab.Screen name="GOOGLE" component={Login} /> */}

      {/* <Tab.Screen name="LoginTest" component={LoginScreen} /> */}
    </Tab.Navigator>
  );
};
