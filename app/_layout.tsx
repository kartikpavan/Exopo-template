import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
   const colorScheme = useColorScheme();
   const [loaded] = useFonts({
      SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
   });

   useEffect(() => {
      if (loaded) {
         SplashScreen.hideAsync();
      }
   }, [loaded]);

   if (!loaded) {
      return null;
   }

   return (
      // The root stack should always be the first child of the root view
      <Provider store={store}>
         <QueryClientProvider client={queryClient}>
            <Stack>
               <Stack.Screen name="register/index" options={{ headerShown: true }} />
               <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
               <Stack.Screen name="+not-found" />
            </Stack>
         </QueryClientProvider>
      </Provider>
   );
}
