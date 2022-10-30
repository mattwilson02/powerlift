import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawer from './Drawer';
import Dashboard from './Drawer';
import RpeCalculator from './RpeCalculator';
import WorkoutDetails from './WorkoutDetails';
import Workouts from './Workouts';

type Routes = {
  Drawer: undefined;
  Dashboard: undefined;
  Workouts: any;
  RpeCalculator: undefined;
  WorkoutDetails: { details: {} };
};

export type RootStackParamList = Routes;

const Routes = () => {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName='Drawer'>
        <Screen
          name='Drawer'
          component={Drawer}
          options={{
            headerShown: false
          }}
        />
        <Screen
          name='Dashboard'
          component={Dashboard}
        />
        <Screen
          name='Workouts'
          component={Workouts}
        />
        <Screen
          name='RpeCalculator'
          component={RpeCalculator}
        />
        <Screen
          name='WorkoutDetails'
          component={WorkoutDetails}
          options={{
            headerTitle: ''
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
