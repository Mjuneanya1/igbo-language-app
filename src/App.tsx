import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AlphabetScreen from './screens/AlphabetScreen';
import NounsScreen from './screens/NounsScreen';
import LessonsScreen from './screens/LessonsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Alphabet" component={AlphabetScreen} />
        <Tab.Screen name="Nouns" component={NounsScreen} />
        <Tab.Screen name="Lessons" component={LessonsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;