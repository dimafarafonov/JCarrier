import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabRoot } from '@navigation/bottomTab';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <BottomTabRoot />
    </NavigationContainer>
  );
};
