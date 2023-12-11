import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SettingsScreen, HomeScreen } from '@screens';

type BottomTabsProps = {
  Home: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<BottomTabsProps>();

export const BottomTabRoot = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
