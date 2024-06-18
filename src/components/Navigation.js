import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import PeopleList from './PeopleList';
import LandingPage from './LandingPage'
import Icon from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={LandingPage} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color="#ffffff" size={25} />
        ),
        tabBarLabelStyle: { fontFamily: 'Trebuchet' },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#262626',
        tabBarStyle: { backgroundColor: '#941a1d' }
      }} />
      <Tab.Screen name="Team" component={PeopleList} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="team" color="#ffffff" size={25} />
        ),
        tabBarLabelStyle: { fontFamily: 'Trebuchet' },
        tabBarActiveTintColor: '#941a1d',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: { backgroundColor: '#ffffff' }
      }} />
      <Tab.Screen name="Add User" component={AddPerson} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="adduser" color="#ffffff" size={25} />
        ),
        tabBarLabelStyle: { fontFamily: 'Trebuchet' },
        tabBarActiveTintColor: '#941a1d',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: { backgroundColor: '#ffffff' }
      }} />
      <Tab.Screen name="Departments" component={CompanyList} options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="contacts" color="#ffffff" size={25} />
        ),
        tabBarLabelStyle: { fontFamily: 'Trebuchet' },
        tabBarActiveTintColor: '#941a1d',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: { backgroundColor: '#ffffff' }
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
