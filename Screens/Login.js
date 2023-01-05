import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../App';
import auth from '@react-native-firebase/auth';
import {useAuth} from '../context/useAuth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('testuser@imdblite.com');
  const [password, setPassword] = useState('test1234');
  const [showPassword, setShowPassword] = useState(true);
  const {authenticated, setAuthenticated} = useAuth();

  console.log(authenticated);

  const LoginHandler = async () => {
    if (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g.test(email) === false) {
      alert('Please enter a valid email');
      return;
    }
    try {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          if (res.user) {
            setAuthenticated(true);
            navigation.navigate('Home');
          } else {
            alert('Something went wrong');
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Text style={styles.text}>Login </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          placeholderTextColor="#565657"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          placeholderTextColor="#565657"
          onChangeText={text => setPassword(text)}
          secureTextEntry={showPassword}
        />
        <Pressable
          style={{
            marginTop: DEVICE_HEIGHT * 0.01,
          }}
          onPress={showPasswordHandler}>
          {showPassword ? (
            <Text
              style={{
                color: '#565657',
              }}>
              Show Password
            </Text>
          ) : (
            <Text
              style={{
                color: '#565657',
              }}>
              Hide Password
            </Text>
          )}
        </Pressable>
      </View>

      <TouchableOpacity style={styles.button} onPress={LoginHandler}>
        <Text>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
  },

  text: {
    color: '#9B9B9B',
    fontSize: 20,
    marginTop: 40,
  },
  input: {
    height: 58,
    borderWidth: 1,
    padding: 10,
    borderColor: '#D6A6DE',
    borderRadius: 8,
    marginTop: 40,
    color: '#000',
  },
  button: {
    backgroundColor: '#881098',
    height: 58,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    marginTop: 40,
  },
});

export default Login;
