import * as WebBrowser from "expo-web-browser";
import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { OverKeyboardView } from "react-native-keyboard-controller";
import { useAuth } from "../components/AuthProvider";

export default function OverKeyboardViewExample() {
  const [isShow, setShow] = useState(false);

  const { logout } = useAuth();

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <TextInput style={styles.input} testID="over_keyboard_view.input" />
      <Button
        testID="over_keyboard_view.show"
        title="Show"
        onPress={() => setShow(true)}
      />
      <Button
        title="Show web browser"
        onPress={() =>
          WebBrowser.openBrowserAsync(
            "https://kirillzyusko.github.io/react-native-keyboard-controller/docs/installation#troubleshooting"
          )
        }
      />
      <OverKeyboardView visible={isShow}>
        <GestureHandlerRootView style={styles.fullScreen}>
          <TouchableWithoutFeedback
            style={styles.fullScreen}
            testID="over_keyboard_view.background"
            onPress={() => setShow(false)}
          >
            <View style={styles.container}>
              <View style={styles.background}>
                <Button title="Hide" onPress={() => setShow(false)} />
                <Button
                  title="Logout"
                  onPress={() => {
                    setShow(false);
                    logout();
                  }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </GestureHandlerRootView>
      </OverKeyboardView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  background: {
    width: 200,
    height: 200,
    backgroundColor: "black",
  },
  input: {
    backgroundColor: "yellow",
    width: 200,
    height: 50,
    alignSelf: "center",
    marginTop: 150,
  },
});
