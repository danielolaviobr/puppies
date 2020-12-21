import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import Game from './screens/Game';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Game" component={Game} />
    </Stack.Navigator>
  );
};

export default Routes;
