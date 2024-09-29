import { useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { View, Text } from "react-native";
import { ServerContext } from "./_layout";

export default function ItemDetail() {
  const data = useContext(ServerContext);

  const { id } = useLocalSearchParams();

  const itemData =
    data !== null
      ? data.filter((item) => item.$id === id)
      : [{ title: "NO DATA", content: "NO DATA" }];

  return (
    <View>
      <Text>{itemData[0].title}</Text>
      <Text>{itemData[0].content}</Text>
    </View>
  );
}
