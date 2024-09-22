import { View, Text, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

type ItemProps = { title: string ,id:string};

export const Item = ({ title,id }: ItemProps) => (
  <Pressable onPress={() => router.navigate({pathname:"/itemDetail",params:{id:id}})}>
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
