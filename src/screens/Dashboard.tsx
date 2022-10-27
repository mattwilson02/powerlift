import { Heading, HStack, ScrollView, Text, VStack } from 'native-base';
import { useQuery } from '@apollo/client';
import { GET_MY_SBD_MAX } from '../api/apolloServer';
import { LiftStats } from '../interfaces/types';
import ProgressIndicator from '../components/ProgressIndicator';
import Loading from '../components/Loading';

const Dashboard = () => {
  const { data, loading } = useQuery(GET_MY_SBD_MAX);

  const personalBests: LiftStats[] = [
    {
      key: 185,
      value: `${data && data.sbd_max[0].Squat}kg`,
      name: 'Squat'
    },
    {
      key: 115,
      value: `${data && data.sbd_max[0].Bench}kg`,
      name: 'Bench'
    },
    {
      key: 215,
      value: `${data && data.sbd_max[0].Deadlift}kg`,
      name: 'Deadlift'
    }
  ];

  return loading ? (
    <Loading />
  ) : (
    <ScrollView
      flex={1}
      bg='black'
    >
      <VStack flex={1}>
        <Heading
          m={5}
          fontWeight={500}
          fontSize='md'
          opacity={50}
          color='white'
        >
          Personal Bests
        </Heading>
        <HStack
          flex={1}
          space={6}
          justifyContent='center'
        >
          {personalBests.map(({ value, name }) => (
            <ProgressIndicator
              lift={name}
              pb={value}
            />
          ))}
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default Dashboard;
