import { getTasks } from "@/appwrite/appwrite";
import { Stack } from "expo-router";
import { createContext, useEffect, useState } from "react";

export const ServerContext = createContext<Task[] | null>(null);

export default function RootLayout() {
  const [data, setData] = useState<Task[]>([]);

  useEffect(() => {
    const appw = async () => {
      const results = await getTasks();
      setData(results);
    };
    appw();
  }, []);
console.log("DATA",data)
  return (
    <ServerContext.Provider value={data}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="itemDetail" />
        <Stack.Screen name="newItem" />
      </Stack>
    </ServerContext.Provider>
  );
}
