import React from "react";
import {View, StyleSheet, StatusBar, FlatList, Button } from "react-native";
import { Item } from "../components/Item";
import { router } from "expo-router";


const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

export default function Index() {
  return (

    <View style={styles.container}

    >
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={(item) => item.id}
      />

      <Button onPress={()=>router.push("/newItem")} title="PRESS TO ADD NEW ITEM"/>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
