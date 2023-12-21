import React from 'react';
import {RootStackNavigators} from './navigations/RootStackNavigations';
import {NavigationContainer} from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/queryClient';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <RootStackNavigators />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
