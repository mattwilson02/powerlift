import { Text, VStack } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Workouts from './Workouts';
import Dashboard from './Dashboard';

const Drawer = () => {
  const { Navigator, Screen } = createDrawerNavigator();
  return (
    <Navigator>
      <Screen
        name='Dashboard'
        component={Dashboard}
      />
      <Screen
        name='Workouts'
        component={Workouts}
      />
    </Navigator>
  );
};
export default Drawer;
