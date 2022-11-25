import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Heading, HStack, Text, View, VStack } from 'native-base';
import { RootStackParamList } from '../../../../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'WorkoutDetails'>;

const WorkoutDetails = ({ route }: Props) => {
  const workout = route.params.details;

  if (!workout) return;

  return (
    <VStack
      bg='black'
      flex={1}
      p={6}
    >
      <VStack
        bg='gray.800'
        flex={1}
        px={4}
        borderRadius='2xl'
        space={2}
      >
        <View>
          <Heading
            size='lg'
            color='white'
            alignSelf='center'
          >
            {workout.name}
          </Heading>
          <Heading
            size='sm'
            color='white'
            alignSelf='center'
          >
            Workout
          </Heading>
        </View>
        <View>
          <HStack
            bg='gray.600'
            p={2}
            borderTopRadius='lg'
            justifyContent='space-between'
          >
            <Text
              fontWeight={700}
              color='white'
              fontSize='lg'
            >
              Exercises
            </Text>
            <Text
              fontWeight={700}
              color='white'
              fontSize='lg'
            >
              RPE
            </Text>
            <Text
              fontWeight={700}
              color='white'
              fontSize='lg'
            >
              Sets
            </Text>
          </HStack>
          <HStack
            bg='gray.400'
            justifyContent='space-between'
            p={2}
          >
            <Text
              fontSize='md'
              color='white'
            >
              {workout.compound.name}
            </Text>
            <Text
              fontSize='md'
              color='white'
            >
              {workout.compound.rpe}
            </Text>
            <Text
              fontSize='md'
              color='white'
            >
              {workout.compound.sets}
            </Text>
          </HStack>
          <HStack
            bg='gray.400'
            justifyContent='space-between'
            p={2}
          >
            <Text
              color='white'
              fontSize='md'
            >
              {workout.accessories.name}
            </Text>
            <Text
              color='white'
              fontSize='md'
            >
              {workout.accessories.rpe}
            </Text>
            <Text
              color='white'
              fontSize='md'
            >
              {workout.accessories.sets}
            </Text>
          </HStack>
        </View>
      </VStack>
    </VStack>
  );
};

export default WorkoutDetails;
