import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/router/route';

const queryClient = new QueryClient()

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Route />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
