import * as Yup from 'yup';

export const useSchemas = () => {
  const percentageCalculatorSchema = Yup.object().shape({
    lift: Yup.string().required('Choose a lift'),
    max: Yup.string().required('Set your one rep max'),
    reps: Yup.string().required('Choose your rep scheme'),
    rpe: Yup.string().required('Choose your rate of perceived exertion')
  });
  return {
    percentageCalculatorSchema
  };
};
