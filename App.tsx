import { NativeBaseProvider } from 'native-base';
import { useFonts } from 'expo-font';
import theme from './src/styles/theme';
import Routes from './src/screens';

import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink
} from '@apollo/client';
import { useState } from 'react';

export const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://amazing-maggot-25.hasura.app/v1/graphql',
      headers: {
        'x-hasura-admin-secret':
          'KnMCmNqzi8344BLciixWvJKyN8VusPcL72VtjDHqVxzWsrgVpGFc2LbOf4Ueajix'
      }
    }),
    cache: new InMemoryCache()
  });
};

const AppView = () => {
  const [fontsLoaded] = useFonts({
    EuclidCircularA_Bold: require('./assets/fonts/EuclidCircularA-Bold.otf'),
    EuclidCircularA_Regular: require('./assets/fonts/EuclidCircularA-Regular.otf'),
    EuclidCircularA_Medium: require('./assets/fonts/EuclidCircularA-Medium.otf'),
    EuclidCircularA_Semibold: require('./assets/fonts/EuclidCircularA-Semibold.otf')
  });

  return <Routes />;
};
export default function App() {
  const [client] = useState(createApolloClient);
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider theme={theme}>
        <AppView />
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
