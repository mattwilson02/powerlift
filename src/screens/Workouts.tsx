import { useQuery } from '@apollo/client';
import {
  Center,
  Heading,
  HStack,
  Pressable,
  ScrollView,
  Text,
  useTheme,
  VStack
} from 'native-base';
import { useState } from 'react';
import { GET_MY_WORKOUT } from '../api/apolloServer';
import Loading from '../components/Loading';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Workouts = () => {
  const { data, loading } = useQuery(GET_MY_WORKOUT);
  const { colors } = useTheme();
  const [showDetails, setShowDetails] = useState(false);

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
          <Pressable>
            <HStack
              alignItems='center'
              space={2}
              justifyContent='center'
            >
              <Heading color='green.400'>Add Workout</Heading>
              <AntDesign
                name='pluscircle'
                size={40}
                color={colors.green[400]}
              />
            </HStack>
          </Pressable>
          {data && (
            <Pressable
              onPress={() => setShowDetails(!showDetails)}
              bg='gray.800'
              p={3}
              borderRadius='xl'
            >
              <HStack
                justifyContent='space-between'
                alignItems='center'
              >
                <Heading color='white'>{data.workout[0].name}</Heading>
                <MaterialIcons
                  name='expand-more'
                  size={30}
                  color='white'
                />
              </HStack>
            </Pressable>
          )}
          {showDetails && (
            <HStack
              bg='gray.600'
              p={3}
              borderRadius='xl'
            >
              <Text color='white'>{data.workout[0].compound.name}</Text>
              <Text color='white'> {data.workout[0].compound.sets} sets</Text>
              <Text color='white'> : RPE {data.workout[0].compound.rpe}</Text>
            </HStack>
          )}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Workouts;
