import { Center, Heading, HStack, ScrollView, Text, VStack } from 'native-base';

const Dashboard = () => {
  const personalBests = {
    squat: '185kg',
    bench: '115kg',
    deadlift: '215kg'
  };

  return (
    <ScrollView
      flex={1}
      bg='blue.100'
    >
      <VStack flex={1}>
        <Heading
          m={5}
          fontWeight={500}
          fontSize='md'
          opacity={50}
        >
          Personal Bests
        </Heading>
        <HStack
          flex={1}
          mx={10}
          space={3}
        >
          <VStack
            width={100}
            height={100}
            borderRadius={100}
            bg='blue.200'
          >
            <Center flex={1}>
              <Text fontSize='md'>{personalBests.squat}</Text>
              <Heading
                fontWeight={500}
                fontSize='md'
              >
                Squat
              </Heading>
            </Center>
          </VStack>
          <VStack
            width={100}
            height={100}
            borderRadius={100}
            bg='blue.200'
          >
            <Center flex={1}>
              <Text fontSize='md'>{personalBests.bench}</Text>
              <Heading
                fontWeight={500}
                fontSize='md'
              >
                Bench
              </Heading>
            </Center>
          </VStack>
          <VStack
            width={100}
            height={100}
            borderRadius={100}
            bg='blue.200'
          >
            <Center flex={1}>
              <Text fontSize='md'>{personalBests.deadlift}</Text>
              <Heading
                fontWeight={500}
                fontSize='md'
              >
                Deadlift
              </Heading>
            </Center>
          </VStack>
        </HStack>
      </VStack>
    </ScrollView>
  );
};

export default Dashboard;
