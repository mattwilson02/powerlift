import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Heading, HStack, Text, VStack } from 'native-base';
import { RootStackParamList } from '.';

type Props = NativeStackScreenProps<RootStackParamList, 'WorkoutDetails'>;

const WorkoutDetails = ({ route }: Props) => {
  const workout = route.params.details.workout;

  console.log(workout);

  if (!workout) return;

  return (
    <VStack
      bg='black'
      flex={1}
      p={6}
    >
      <VStack>
        <Heading color='white'>{workout[0].name}</Heading>
        <HStack space={2}>
          <Text color='white'>{workout[0].compound.name}</Text>
          <Text color='white'>{workout[0].compound.sets} sets</Text>
          <Text color='white'>RPE {workout[0].compound.rpe}</Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default WorkoutDetails;
