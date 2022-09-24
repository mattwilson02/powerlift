import { NativeBaseProvider } from 'native-base';
import { useFonts } from 'expo-font';
import theme from './src/styles/theme';
import Routes from './src/screens';

const AppView = () => {
  const [fontsLoaded] = useFonts({
    EuclidCircularA_Bold: require('./assets/fonts/EuclidCircularA-Bold.otf'),
    EuclidCircularA_Regular: require('./assets/fonts/EuclidCircularA-Regular.otf'),
    EuclidCircularA_Medium: require('./assets/fonts/EuclidCircularA-Medium.otf'),
    EuclidCircularA_Semibold: require('./assets/fonts/EuclidCircularA-Semibold.otf')
  });

  return <Routes initialScreenName='Dashboard' />;
};
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AppView />
    </NativeBaseProvider>
  );
}
