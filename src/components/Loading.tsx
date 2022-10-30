import { Center, Text } from 'native-base';

const Loading = () => {
  return (
    <Center
      flex={1}
      bg='black'
    >
      <Text
        fontWeight={600}
        fontSize='xl'
        color='pink.600'
      >
        Loading...
      </Text>
    </Center>
  );
};

export default Loading;
