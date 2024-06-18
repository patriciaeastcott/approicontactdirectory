import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, View, TextInput, Button, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginData from '../reducers/logins1.json';

const image = { uri: "https://cdn.pixabay.com/photo/2019/07/13/16/30/architecture-4335215_1280.jpg" };

const LandingPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(true);

  useEffect(() => {
    const checkFirstTime = async () => {
      const firstTime = await AsyncStorage.getItem('firstTime');
      if (firstTime === null) {
        setIsLoggingIn(true);
        await AsyncStorage.setItem('firstTime', 'no');
      }
    };
    checkFirstTime();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoggingIn(true);
    }, 180000); // 3 minutes in milliseconds
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = () => {
    const user = loginData.find(user => user.email === email && user.password === password);
    if (user) {
      onLogin();
      setIsLoggingIn(false);
    } else {
      Alert.alert('Invalid email or password', 'Please enter the correct details and try again.');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}>
          <Image source={require('../images/logo_example02.png')} style={styles.logo} />
          {isLoggingIn && (
            <View style={styles.loginContainer}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <Button style={styles.button} title="Login" onPress={handleLogin} />
            </View>
          )}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent overlay
  },
  logo: {
    marginBottom: 20,
  },
  loginContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    fontFamily: 'Trebuchet'
  },
  button: {
    marginTop: 10,
    backgroundColor: '#941a1d',
    color: '#ffffff',
  },
});

export default LandingPage;
