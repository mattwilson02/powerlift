import { Text, VStack } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Workouts from './Workouts';
import Dashboard from './Dashboard';
import RpeCalculator from './RpeCalculator';

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
