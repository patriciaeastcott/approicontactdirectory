import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers/PeopleReducer';
import { Appbar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LandingPage from './LandingPage';
import Navigation from './Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const loggedIn = await AsyncStorage.getItem('loggedIn');
      if (loggedIn === 'true') {
        setIsLoggedIn(true);
      }
    };
    checkLoginStatus();
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    AsyncStorage.setItem('loggedIn', 'true');
  };

  const handleLogout = async () => {
    setIsLoggedIn(false);
    await AsyncStorage.setItem('loggedIn', 'false');
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Appbar.Header style={{ backgroundColor: '#941a1d' }}>
          <Appbar.Content 
            title="ROI HR PORTAL" 
            subtitle={'Developed by Patricia Eastcott'} 
            titleStyle={{ color: '#ffffff', fontFamily: 'Trebuchet' }} 
            subtitleStyle={{ color: '#ffffff', fontSize: 8, fontFamily: 'Trebuchet' }} 
          />
          {isLoggedIn && (
            <Appbar.Action icon="logout" color="#ffffff" onPress={handleLogout} />
          )}
        </Appbar.Header>
        {isLoggedIn ? (
          <Navigation />
        ) : (
          <LandingPage onLogin={handleLogin} />
        )}
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#c64c38',
  },
});
