import { Center, Text } from 'native-base';

const Loading = () => {
  return (
    <Center
      flex={1}
      bg='background.0'
    >
      <Text
        fontWeight={600}
        fontSize='xl'
        color='background.5'
      >
        Loading...
      </Text>
    </Center>
  );
};

export default Loading;
