import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/components/AuthProvider";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
