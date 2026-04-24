import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome Back</Text>
      <Text style={styles.subheading}>Sign in to continue tracking</Text>

      <TextInput placeholder="Enter username" style={styles.input} />
      <TextInput
        placeholder="Enter password"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.secondaryText}>Create New Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    color: "gray",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#1E5BFF",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
  },
  secondaryText: {
    fontSize: 16,
  },
});