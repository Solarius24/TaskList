import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Client, Account, ID, Models } from "react-native-appwrite";
import React, { useState } from "react";

let client: Client;
let account: Account;

client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66f063e800132539b22c")
  .setPlatform("com.task_list");

account = new Account(client);
export default function App() {
  const [loggedInUser, setLoggedInUser] =
    useState<Models.User<Models.Preferences> | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function login(email: string, password: string) {
    await account.createEmailPasswordSession(email, password);
    setLoggedInUser(await account.get());
  }

  async function register(email: string, password: string, name: string) {
    await account.create(ID.unique(), email, password, name);
    await login(email, password);
    setLoggedInUser(await account.get());
  }
  return (
    <View></View>
    // ... Implement your UI here
  );
}

const styles = StyleSheet.create({
  // ... define some tyles
});
