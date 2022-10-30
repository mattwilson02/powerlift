import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { VStack } from 'native-base';
import { RootStackParamList } from '.';

type Props = NativeStackScreenProps<RootStackParamList, 'RpeCalculator'>;

const RpeCalculator = () => {
  return <VStack />;
};

export default RpeCalculator;
