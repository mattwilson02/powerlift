import {
  Button,
  Center,
  Heading,
  NativeBaseProvider,
  Text,
  VStack
} from 'native-base';
import { useFonts } from 'expo-font';
import theme from './src/styles/theme';
import InputForm from './src/components/InputForm';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSchemas } from './src/hooks/useSchemas';
import { useCallback, useState } from 'react';

const AppView = () => {
  const { percentageCalculatorSchema } = useSchemas();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(percentageCalculatorSchema)
  });

  const [fontsLoaded] = useFonts({
    EuclidCircularA_Bold: require('./assets/fonts/EuclidCircularA-Bold.otf'),
    EuclidCircularA_Regular: require('./assets/fonts/EuclidCircularA-Regular.otf'),
    EuclidCircularA_Medium: require('./assets/fonts/EuclidCircularA-Medium.otf'),
    EuclidCircularA_Semibold: require('./assets/fonts/EuclidCircularA-Semibold.otf')
  });

  const setValues = values => {
    return console.log(values);
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
        <Button onPress={handleSubmit(setValues)}>Calculate</Button>
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
