import { Link } from "expo-router";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

type ItemProps = { title: string };

export const Item = ({ title }: ItemProps) => (
  <Pressable onPress={() => router.push("/itemDetail")}>
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
