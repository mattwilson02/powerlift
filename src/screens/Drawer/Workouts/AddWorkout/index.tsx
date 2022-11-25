import { Heading, HStack, ScrollView, VStack } from 'native-base';
import { useForm } from 'react-hook-form';
import InputForm from '../../../../components/InputForm';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSchemas } from '../../../../hooks/useSchemas';
import Button from '../../../../components/Button';
import { CREATE_WORKOUT } from '../../../../graphql/apolloServer';
import { useMutation } from '@apollo/client';
import { useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../routes';
type Props = NativeStackScreenProps<RootStackParamList, 'AddWorkout'>;

const AddWorkout = ({ navigation }: Props) => {
  const { workoutSchema } = useSchemas();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(workoutSchema)
  });

  const [createWorkout, { loading }] = useMutation(CREATE_WORKOUT);

  const onSubmit = useCallback(
    async ({
      name,
      compound,
      accessories,
      compoundSets,
      compoundRPE,
      accessoriesSets,
      accessoriesRPE
    }) => {
      const response = await createWorkout({
        variables: {
          name,
          compound: {
            name: compound,
            sets: compoundSets,
            rpe: compoundRPE
          },
          accessories: {
            name: accessories,
            sets: accessoriesSets,
            rpe: accessoriesRPE
          },
          id: 10
          // TODO: randomise an id
        }
      });
      if (response) navigation.navigate('Workouts');
    },
    []
  );

  return (
    <ScrollView
      flex={1}
      bg='black'
    >
      <VStack
        space={4}
        p={6}
      >
        <Heading
          textAlign='center'
          color='background.10'
        >
          New Workout
        </Heading>
        <InputForm
          control={control}
          name='name'
          label='Name'
        />
        <VStack
          p={4}
          borderRadius='lg'
          bg='background.1'
        >
          <InputForm
            control={control}
            name='compound'
            label='Compound'
          />
          <HStack space={2}>
            <InputForm
              control={control}
              name='compoundSets'
              label='Sets'
            />
            <InputForm
              control={control}
              name='compoundRPE'
              label='RPE'
            />
          </HStack>
        </VStack>
        <VStack
          p={4}
          borderRadius='lg'
          bg='background.1'
        >
          <InputForm
            control={control}
            name='accessories'
            label='Accessories'
          />
          <HStack space={2}>
            <InputForm
              control={control}
              name='accessoriesSets'
              label='Sets'
            />
            <InputForm
              control={control}
              name='accessoriesRPE'
              label='RPE'
            />
          </HStack>
        </VStack>
        <Button
          isLoading={loading}
          onPress={handleSubmit(onSubmit)}
        >
          Add Workout
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default AddWorkout;
