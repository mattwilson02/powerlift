import { Heading, HStack, ScrollView, Text, VStack } from 'native-base';
import { useQuery } from '@apollo/client';
import { GET_MY_SBD_MAX } from '../api/apolloServer';
import { LiftStats } from '../interfaces/types';
import ProgressIndicator from '../components/ProgressIndicator';
import Loading from '../components/Loading';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '.';
import { useEffect, useState } from 'react';
import Clock from '../components/Clock';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const Dashboard = () => {
  const { data, loading } = useQuery(GET_MY_SBD_MAX, {
    variables: {
      id: 1
    }
  });
  const [time, setTime] = useState('');

  const personalBests: LiftStats[] = [
    {
      key: 1,
      value: `${data && data.sbd_max[0].Squat}kg`,
      name: 'Squat'
    },
    {
      key: 2,
      value: `${data && data.sbd_max[0].Bench}kg`,
      name: 'Bench'
    },
    {
      key: 3,
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
      p={6}
    >
      <VStack
        flex={1}
        space={4}
      >
        <HStack
          alignItems='center'
          justifyContent='space-between'
        >
          <Heading
            fontSize={26}
            color='white'
          >
            {data.sbd_max[0].Name}
          </Heading>

          <Clock
            sendTime={setTime}
            time={time}
          />
        </HStack>

        <Heading
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
