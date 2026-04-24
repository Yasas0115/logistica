import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

export default function RegisterScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Create Account</Text>

      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="Email Address" style={styles.input} />
      <TextInput placeholder="Phone" style={styles.input} />
      <TextInput placeholder="Company" style={styles.input} />
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#1E5BFF",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});