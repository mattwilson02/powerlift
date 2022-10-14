import { HStack } from 'native-base';
import CircularProgress from 'react-native-circular-progress-indicator';
import ProgressIndicator from './ProgressIndicator';

type Props = {
  liftName: string;
  pb: string;
  progress: number;
};

const LiftProgressDisplay = ({ liftName, pb, progress }: Props) => {
  return (
    <HStack
      space={4}
      alignItems='center'
      bg='gray.800'
      p={3}
      borderRadius={15}
      justifyContent='space-between'
    >
      <ProgressIndicator
        lift={liftName}
        pb={pb}
      />
      <CircularProgress
        radius={45}
        value={progress}
        titleColor='#222'
        titleFontSize={20}
        valueSuffix='%'
        inActiveStrokeColor='#2ecc71'
        inActiveStrokeOpacity={0.2}
        subtitle=' to Goal'
      />
    </HStack>
  );
};

export default LiftProgressDisplay;
