import { Center, Heading, Text, VStack } from 'native-base';

type Props = {
  lift: string;
  pb: string | undefined;
};

const ProgressIndicator = ({ lift, pb }: Props) => {
  return (
    <VStack
      width={100}
      height={100}
      borderRadius={20}
      bg='gray.500'
    >
      <Center flex={1}>
        <Text
          fontWeight={500}
          fontSize='lg'
        >
          {pb}
        </Text>
        <Heading
          fontWeight={500}
          fontSize='md'
        >
          {lift}
        </Heading>
      </Center>
    </VStack>
  );
};

export default ProgressIndicator;