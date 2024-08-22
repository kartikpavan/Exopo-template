import { AuthSelector } from "@/redux/slices/authSlice";
import { Redirect } from "expo-router";
import { useSelector } from "react-redux";

export default function Page() {
   const { isAuthenticated } = useSelector(AuthSelector);
   console.log(isAuthenticated);
   if (!isAuthenticated) {
      return <Redirect href="/register" />;
   }
   return <Redirect href="/(tabs)/dashboard" />;
}
