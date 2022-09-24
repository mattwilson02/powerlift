import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawer from './Drawer';
import Dashboard from './Drawer';
import RpeCalculator from './RpeCalculator';
import Workouts from './Workouts';

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
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
