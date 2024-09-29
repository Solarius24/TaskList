import { View, TextInput, Button} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { router } from "expo-router";
import { addTask } from "@/appwrite/appwrite";

export default function newItem() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      title: "",
      description: "",
    },
  });

  const onSubmit = (formData: { description: string; title: string; }) => {
    addTask(formData.description,formData.title)
    router.push("/");
  };

  return (
    <View>
      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="title"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="title"
      />

      <Controller
        control={control}
        rules={{
          maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            placeholder="description"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="description"
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
