import { Text, VStack } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Dashboard = () => {
  const { Navigator, Screen } = createDrawerNavigator();
  return <Navigator></Navigator>;
};
export default Dashboard;
