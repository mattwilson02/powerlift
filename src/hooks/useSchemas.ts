import * as Yup from 'yup';

export const useSchemas = () => {
  const workoutSchema = Yup.object().shape({
    name: Yup.string().required('Add a name for your workout'),
    compound: Yup.string().required('Add a compound lift to your session'),
    compoundSets: Yup.string().required('Add amount of sets'),
    compoundRPE: Yup.string(),
    accessories: Yup.string().required(
      'Add some secondary movements to your workout'
    ),
    accessoriesSets: Yup.string(),
    accessoriesRPE: Yup.string()
  });

  return {
    workoutSchema
  };
};
