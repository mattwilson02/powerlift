import { Center, Heading, HStack, Text, VStack } from 'native-base';

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
      bg='build.2'
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
