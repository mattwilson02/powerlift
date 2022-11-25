import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Heading, HStack, Text, View, VStack } from 'native-base';
import { RootStackParamList } from '../../../../routes';

type Props = NativeStackScreenProps<RootStackParamList, 'WorkoutDetails'>;

const WorkoutDetails = ({ route }: Props) => {
  const workout = route.params?.details;

  if (!workout) return;

  return (
    <VStack
      bg='background.0'
      flex={1}
      p={6}
    >
      <VStack
        bg='background.2'
        flex={1}
        px={4}
        borderRadius='2xl'
        space={2}
      >
        <View padding={6}>
          <Heading
            size='lg'
            color='background.10'
            alignSelf='center'
          >
            {workout.name}
          </Heading>
        </View>
        <View>
          <HStack
            bg='background.4'
            p={2}
            borderTopRadius='lg'
            justifyContent='space-between'
          >
            <Text
              fontWeight={700}
              color='background.10'
              fontSize='lg'
            >
              Exercises
            </Text>
            <Text
              fontWeight={700}
              color='background.10'
              fontSize='lg'
            >
              RPE
            </Text>
            <Text
              fontWeight={700}
              color='background.10'
              fontSize='lg'
            >
              Sets
            </Text>
          </HStack>
          <HStack
            bg='background.6'
            justifyContent='space-between'
            p={2}
          >
            <Text
              fontSize='md'
              color='background.10'
            >
              {workout.compound.name}
            </Text>
            <Text
              fontSize='md'
              color='background.10'
            >
              {workout.compound.rpe}
            </Text>
            <Text
              fontSize='md'
              color='background.10'
            >
              {workout.compound.sets}
            </Text>
          </HStack>
          <HStack
            bg='background.6'
            justifyContent='space-between'
            p={2}
          >
            <Text
              color='background.10'
              fontSize='md'
            >
              {workout.accessories.name}
            </Text>
            <Text
              color='background.10'
              fontSize='md'
            >
              {workout.accessories.rpe}
            </Text>
            <Text
              color='background.10'
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
