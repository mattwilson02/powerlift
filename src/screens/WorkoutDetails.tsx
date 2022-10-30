import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { VStack } from 'native-base';
import { RootStackParamList } from '.';

type Props = NativeStackScreenProps<RootStackParamList, 'WorkoutDetails'>;

const WorkoutDetails = () => {
  return <VStack />;
};

export default WorkoutDetails;
