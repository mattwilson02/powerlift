import { Center, Heading, Text, VStack } from 'native-base';

type Props = {
  lift: string;
  pb: string | undefined;
};

const PersonalBestCircle = ({ lift, pb }: Props) => {
  return (
    <VStack
      width={100}
      height={100}
      borderRadius={100}
      bg='blue.200'
    >
      <Center flex={1}>
        <Text fontSize='md'>{pb}</Text>
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

export default PersonalBestCircle;
