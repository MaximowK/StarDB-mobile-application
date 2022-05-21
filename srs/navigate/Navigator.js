import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import MainScreen from '../screens/main-screen';
import ItemScreen from '../screens/item-screen';
import React from 'react';

const MainStack = createNativeStackNavigator();

const MainNavigator = ({route}) => {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="main">
        <MainStack.Screen
          name="main"
          component={MainScreen}
          headerShown={false}
        />
        <MainStack.Screen
          name="ItemScreen"
          component={ItemScreen}
          headerShown={false}
          initialParams={route}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
