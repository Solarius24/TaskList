// @ts-nocheck
import React, { useContext } from "react";
import { View, StyleSheet, StatusBar, FlatList, Button } from "react-native";
import { Item } from "../components/Item";
import { router } from "expo-router";
import GlobalContextProvider, {
  GlobalContext,
  useGlobalContext,
} from "../context/GlobalProvider";


export default function Index() {
  const { data } = useContext(GlobalContext);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item title={item.title} id={item.id} />}
        keyExtractor={(item) => item.id}
      />

      <Button
        onPress={() => router.push("/newItem")}
        title="PRESS TO ADD NEW ITEM"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
