import { Heading, ScrollView, Text, VStack } from 'native-base';

import LiftProgressDisplay from '../components/LiftProgressDisplay';
import { goals, initialBests, personalBests } from '../constants/personalBests';

const Dashboard = () => {
  const progress = (pb: number, ib: number, goal: number): number => {
    return ((pb - ib) / (goal - ib)) * 100;
  };

  const progressSquat = progress(
    personalBests[0].key,
    initialBests[0].key,
    goals[0].key
  );

  const progressBench = progress(
    personalBests[1].key,
    initialBests[1].key,
    goals[1].key
  );

  const progressDeadlift = progress(
    personalBests[2].key,
    initialBests[2].key,
    goals[2].key
  );

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
          <LiftProgressDisplay
            liftName='Squat'
            pb={personalBests[0].value}
            progress={progressSquat}
          />
          <LiftProgressDisplay
            liftName='Bench'
            pb={personalBests[1].value}
            progress={progressBench}
          />
          <LiftProgressDisplay
            liftName='Deadlift'
            pb={personalBests[2].value}
            progress={progressDeadlift}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default Dashboard;
