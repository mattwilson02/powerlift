import { useQuery } from '@apollo/client';
import {
  Heading,
  HStack,
  Pressable,
  ScrollView,
  useTheme,
  View,
  VStack
} from 'native-base';
import { GET_MY_WORKOUT } from '../api/apolloServer';
import Loading from '../components/Loading';
import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '.';
import { Workout } from '../interfaces/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Workouts'>;

const Workouts = ({ navigation }: Props) => {
  const { data, loading } = useQuery(GET_MY_WORKOUT);
  const { colors } = useTheme();

  return loading ? (
    <Loading />
  ) : (
    <ScrollView
      bg='black'
      flex={1}
    >
      <VStack
        flex={1}
        p={6}
        justifyContent='space-between'
      >
        <VStack space={4}>
          <Pressable onPress={() => navigation.navigate('AddWorkout')}>
            <View alignSelf='center'>
              <AntDesign
                name='pluscircle'
                size={30}
                color={colors.blue[600]}
              />
            </View>
          </Pressable>
          {data && (
            <>
              {data.workout.map((workout: Workout) => (
                <Pressable
                  key={workout.id}
                  onPress={() =>
                    navigation.navigate('WorkoutDetails', { details: workout })
                  }
                  bg='gray.800'
                  p={3}
                  borderRadius='xl'
                >
                  <HStack
                    justifyContent='space-between'
                    alignItems='center'
                  >
                    <Heading color='white'>{workout.name}</Heading>
                    <AntDesign
                      name='rightcircle'
                      size={24}
                      color='white'
                    />
                  </HStack>
                </Pressable>
              ))}
            </>
          )}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Workouts;
