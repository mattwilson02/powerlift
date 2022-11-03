import { ScrollView, VStack } from "native-base";
import { useForm } from "react-hook-form";
import InputForm from "../components/InputForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSchemas } from "../hooks/useSchemas";

const AddWorkout = () => {
  const { workoutSchema } = useSchemas();
  const { control } = useForm({
    resolver: yupResolver(workoutSchema),
  });

  return (
    <ScrollView flex={1} bg="black">
      <VStack space={6}>
        <InputForm control={control} name="name" label="Name" />
      </VStack>
    </ScrollView>
  );
};

export default AddWorkout;
