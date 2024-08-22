import { Stack } from "expo-router";

export default function DashboardLayout() {
   return (
      <Stack>
         <Stack.Screen name="index" options={{ title: "Dashboard" }} />
         <Stack.Screen name="orders" options={{ title: "Orders" }} />
         <Stack.Screen name="cart" options={{ title: "Cart" }} />
      </Stack>
   );
}
