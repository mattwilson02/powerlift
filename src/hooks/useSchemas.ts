import * as Yup from "yup";

export const useSchemas = () => {
  const workoutSchema = Yup.object().shape({
    name: Yup.string().required("Add a name for your workout"),
  });

  return {
    workoutSchema,
  };
};
