import { useQuery } from '@apollo/client';
import {
  Heading,
  HStack,
  Pressable,
  ScrollView,
  Text,
  useTheme,
  View,
  VStack
} from 'native-base';
import { GET_MY_WORKOUT } from '../../../graphql/apolloServer';
import Loading from '../../../components/Loading';
import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes';
import { Workout } from '../../../interfaces/types';
import NavigationCard from '../../../components/NavigationCard';

type Props = NativeStackScreenProps<RootStackParamList, 'Workouts'>;

const Workouts = ({ navigation }: Props) => {
  const { data, loading } = useQuery(GET_MY_WORKOUT);
  const { colors } = useTheme();

  console.log(data?.workout);

  return loading ? (
    <Loading />
  ) : (
    <ScrollView
      bg='background.0'
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
              <HStack space={2}>
                <Text
                  fontWeight={600}
                  fontSize='lg'
                  color='build.1'
                >
                  Add Workout
                </Text>
                <AntDesign
                  name='pluscircle'
                  size={30}
                  color={colors.build[1]}
                />
              </HStack>
            </View>
          </Pressable>
          {data && (
            <>
              {data.workout.map((workout: Workout) => {
                console.log(workout);

                return (
                  <NavigationCard
                    item={workout}
                    onNavigate={() =>
                      navigation.navigate('WorkoutDetails', {
                        details: workout
                      })
                    }
                  />
                );
              })}
            </>
          )}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Workouts;
