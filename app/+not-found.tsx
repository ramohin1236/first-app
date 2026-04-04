import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
  <>
    <Stack.Screen
      options={{
        title: "Not Found",
      }}
    />
      <View style={styles.container}>
        <Text style={styles.text}>Page Not Found</Text>
        <Link href="/" style={styles.button}>
          <Text style={styles.text}>Go to Home</Text>
        </Link>
      </View>
    
  </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    marginTop: 20,
    color: "#61dafb",
    fontSize: 18,
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
