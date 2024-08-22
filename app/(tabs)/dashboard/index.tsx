import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const DashboardScreen = () => {
   return (
      <View>
         <Text>DashboardScreen</Text>
         <Link href="/(tabs)/dashboard/orders">Orders</Link>
         <Link href="/(tabs)/dashboard/cart">Cart</Link>
         <Link href="/settings">Go to Settings</Link>
      </View>
   );
};

export default DashboardScreen;

const styles = StyleSheet.create({});
