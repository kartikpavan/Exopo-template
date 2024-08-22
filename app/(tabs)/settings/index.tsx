import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const SettingsScreen = () => {
   return (
      <View>
         <Stack.Screen options={{ title: "SettingsScreen" }} />
         <Text>SettingsScree</Text>
      </View>
   );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
