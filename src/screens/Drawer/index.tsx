import { Text, useTheme, VStack } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Workouts from './Workouts';
import Dashboard from '../Dashboard';
import RpeCalculator from './RPECalculator';

const Drawer = () => {
  const { colors } = useTheme();
  const { Navigator, Screen } = createDrawerNavigator();
  return (
    <Navigator
      screenOptions={{
        headerTintColor: colors.background[0],
        headerStyle: {
          backgroundColor: colors.build[2]
        },
        drawerStyle: {
          backgroundColor: colors.build[2]
        },
        drawerActiveTintColor: colors.background[0],
        drawerInactiveTintColor: colors.black
      }}
    >
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
        options={{
          title: 'RPE Calculator'
        }}
      />
    </Navigator>
  );
};
export default Drawer;
