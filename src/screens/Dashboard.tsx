import { Center, Heading, HStack, ScrollView, Text, VStack } from 'native-base';
import { useState } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import PersonalBestCircle from '../components/PersonalBestCircle';

const Dashboard = () => {
  type KeyValues = {
    key: number;
    value: string;
  };

  const initialBests: KeyValues[] = [
    {
      key: 115,
      value: '185kg'
    },
    {
      key: 95,
      value: '115kg'
    },
    {
      key: 160,
      value: '215kg'
    }
  ];

  const goals: KeyValues[] = [
    {
      key: 200 - initialBests[0].key,
      value: '200kg'
    },
    {
      key: 120 - initialBests[1].key,
      value: '120kg'
    },
    {
      key: 230 - initialBests[2].key,
      value: '230kg'
    }
  ];

  const personalBests: KeyValues[] = [
    {
      key: 185 - initialBests[0].key,
      value: '185kg'
    },
    {
      key: 115 - initialBests[1].key,
      value: '115kg'
    },
    {
      key: 215 - initialBests[2].key,
      value: '215kg'
    }
  ];

  const progressSquat = (personalBests[0].key / goals[0].key) * 100;
  const progressBench = (personalBests[1].key / goals[1].key) * 100;
  const progressDeadlift = (personalBests[2].key / goals[2].key) * 100;

  return (
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
        <VStack
          flex={1}
          mx={10}
          space={6}
        >
          <HStack
            space={4}
            alignItems='center'
            bg='gray.800'
            p={3}
            borderRadius={15}
            justifyContent='space-between'
          >
            <PersonalBestCircle
              lift='Squat'
              pb={personalBests[0].value}
            />

            <CircularProgress
              radius={45}
              value={progressSquat}
              subtitle=' to Goal'
              titleColor='#222'
              titleFontSize={20}
              valueSuffix='%'
              inActiveStrokeColor='#2ecc71'
              inActiveStrokeOpacity={0.2}
            />
          </HStack>
          <HStack
            space={4}
            alignItems='center'
            bg='gray.800'
            p={3}
            borderRadius={15}
            justifyContent='space-between'
          >
            <PersonalBestCircle
              lift='Bench'
              pb={personalBests[1].value}
            />
            <CircularProgress
              radius={45}
              value={progressBench}
              titleColor='#222'
              titleFontSize={20}
              valueSuffix='%'
              inActiveStrokeColor='#2ecc71'
              inActiveStrokeOpacity={0.2}
              subtitle=' to Goal'
            />
          </HStack>
          <HStack
            space={4}
            alignItems='center'
            bg='gray.800'
            p={3}
            borderRadius={15}
            justifyContent='space-between'
          >
            <PersonalBestCircle
              lift='Deadlift'
              pb={personalBests[2].value}
            />
            <CircularProgress
              radius={45}
              value={progressDeadlift}
              titleColor='#222'
              titleFontSize={20}
              valueSuffix='%'
              inActiveStrokeColor='#2ecc71'
              inActiveStrokeOpacity={0.2}
              subtitle=' to Goal'
            />
          </HStack>
        </VStack>
        <Center
          flex={1}
          mt={90}
        ></Center>
      </VStack>
    </ScrollView>
  );
};

export default Dashboard;
