import { Button, StyleSheet, View } from "react-native";
import { useAuth } from "../components/AuthProvider";

const LoginScreen = () => {
  const { login } = useAuth();

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={login} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
