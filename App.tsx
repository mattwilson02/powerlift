import {
  Button,
  Heading,
  HStack,
  NativeBaseProvider,
  VStack
} from 'native-base';
import { useFonts } from 'expo-font';
import theme from './src/styles/theme';
import InputForm from './src/components/InputForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSchemas } from './src/hooks/useSchemas';
import Set from './src/components/Set';
import { useState } from 'react';

const sets = [
  { id: 1, lift: 'Squat', max: '140kg', reps: '8', rpe: '6' },
  { id: 2, lift: 'Bench', max: '90kg', reps: '6', rpe: '6' },
  { id: 3, lift: 'Deadlift', max: '200kg', reps: '2', rpe: '7' }
];

const AppView = () => {
  const { percentageCalculatorSchema } = useSchemas();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(percentageCalculatorSchema)
  });

  const [fontsLoaded] = useFonts({
    EuclidCircularA_Bold: require('./assets/fonts/EuclidCircularA-Bold.otf'),
    EuclidCircularA_Regular: require('./assets/fonts/EuclidCircularA-Regular.otf'),
    EuclidCircularA_Medium: require('./assets/fonts/EuclidCircularA-Medium.otf'),
    EuclidCircularA_Semibold: require('./assets/fonts/EuclidCircularA-Semibold.otf')
  });

  const [setsState, setSetsState] = useState(sets);

  const addSet = (values: any) => {
    console.log(values);
  };

  return (
    <VStack
      flex={1}
      bg='coolGray.400'
    >
      <VStack
        flex={1}
        my={20}
        alignItems='center'
        mx={6}
        space={2}
      >
        <Heading mb={4}>Powerlifting App!</Heading>
        <InputForm
          control={control}
          name='lift'
          label='Lift'
          error={errors.lift?.message}
        />
        <InputForm
          control={control}
          name='max'
          label='One Rep Max (kg)'
          error={errors.max?.message}
        />
        <InputForm
          control={control}
          name='reps'
          label='Number of Reps (1-9)'
          error={errors.reps?.message}
        />
        <InputForm
          control={control}
          name='rpe'
          label='RPE (1-9)'
          error={errors.rpe?.message}
        />
        <VStack
          bg='blue.300'
          borderRadius={10}
          paddingY={5}
          paddingX={70}
        >
          {setsState.map(item => {
            return (
              <Set
                key={item.id}
                lift={item.lift}
                max={item.max}
                reps={item.reps}
                rpe={item.rpe}
              />
            );
          })}
        </VStack>
        <Button
          onPress={handleSubmit(addSet)}
          bg='purple.400'
          _pressed={{ bg: 'purple.600' }}
        >
          Calculate
        </Button>
      </VStack>
    </VStack>
  );
};
export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AppView />
    </NativeBaseProvider>
  );
}
