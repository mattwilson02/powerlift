import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { VStack } from 'native-base';
import { RootStackParamList } from '../../../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'RpeCalculator'>;

const RpeCalculator = () => {
  return <VStack />;
};

export default RpeCalculator;
