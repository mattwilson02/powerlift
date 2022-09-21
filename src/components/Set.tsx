import { HStack, Text, VStack } from 'native-base';

type Props = {
  lift: string;
  max: string;
  reps: string;
  rpe: string;
};

const Set = ({ lift, max, reps, rpe }: Props) => {
  return (
    <HStack
      paddingY={2}
      width='100%'
    >
      <Text fontWeight={500}>{`${lift}: `}</Text>
      <Text fontWeight={500}>{`${max} for`}</Text>
      <Text fontWeight={500}>{` ${reps} reps `}</Text>
      <Text fontWeight={500}>{`@ ${rpe}`}</Text>
    </HStack>
  );
};

export default Set;
