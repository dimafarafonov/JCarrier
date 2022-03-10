import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StudyStackScreens } from '@navigation/stacks/index';

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <StudyStackScreens />
    </NavigationContainer>
  );
};
