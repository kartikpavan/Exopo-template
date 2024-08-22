import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const RegisterScreen = () => {
   return (
      <View>
         <Stack.Screen options={{ title: "RegisterSCreen" }} />
         <Text>RegisterScreen</Text>
      </View>
   );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
