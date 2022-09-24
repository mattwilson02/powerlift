import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Dashboard';
import Workouts from './Workouts';

type Screens = {
  Dashboard: undefined;
  Workouts: undefined;
};

export type RootStackParamList = Screens;
export type RouteName = keyof RootStackParamList;

type Props = {
  initialScreenName: RouteName;
};

const Routes = ({ initialScreenName }: Props) => {
  const { Navigator, Screen, Group } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName={initialScreenName}>
        <>
          <Screen
            name='Dashboard'
            component={Dashboard}
          />
          <Screen
            name='Workouts'
            component={Workouts}
          />
        </>
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
