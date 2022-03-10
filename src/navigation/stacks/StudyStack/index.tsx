import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SetStateUpdatesExamples from '@react-concepts/index';

type RootStackParamListStudy = {
  SetStateUpdatesExamples: undefined;
};

const StudyStack = createNativeStackNavigator<RootStackParamListStudy>();

export const StudyStackScreens = () => (
  <StudyStack.Navigator>
    <StudyStack.Screen name="SetStateUpdatesExamples" component={SetStateUpdatesExamples} />
  </StudyStack.Navigator>
);
