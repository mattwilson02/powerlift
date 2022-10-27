import { useQuery } from '@apollo/client';
import {
  Center,
  Heading,
  HStack,
  Pressable,
  ScrollView,
  Text,
  VStack
} from 'native-base';
import { useState } from 'react';
import { GET_MY_WORKOUT } from '../api/apolloServer';
import Loading from '../components/Loading';

const Workouts = () => {
  const { data, loading } = useQuery(GET_MY_WORKOUT);
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
        <VStack>
          {data && (
            <Pressable
              onPress={() => setShowDetails(!showDetails)}
              bg='gray.800'
              p={3}
              borderRadius='xl'
            >
              <Heading color='white'>{data.workout[0].name}</Heading>
            </Pressable>
          )}
          {showDetails && (
            <HStack>
              <Text color='white'>{data.workout[0].compound.name}</Text>
              <Text color='white'> {data.workout[0].compound.sets} sets</Text>
            </HStack>
          )}
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Workouts;
