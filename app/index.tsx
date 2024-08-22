import { Redirect } from "expo-router";
import { useState } from "react";

export default function Page() {
   const isAuthenticated = true;
   if (!isAuthenticated) {
      return <Redirect href="/register" />;
   }
   return <Redirect href="/(tabs)/dashboard" />;
}
