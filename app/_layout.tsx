import GlobalContextProvider, { GlobalContext } from "@/context/GlobalProvider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GlobalContextProvider>
    <Stack>
      <Stack.Screen name="index"   options={{
          headerShown: false
        }}/>
      <Stack.Screen name="itemDetail" />
      <Stack.Screen name="newItem"/>
    </Stack>
    </GlobalContextProvider>
  );
}
