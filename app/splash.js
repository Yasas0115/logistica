import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  return (
    <LinearGradient colors={["#1E5BFF", "#6A1BCE"]} style={styles.container}>
      <View style={styles.logoBox}>
        <Ionicons name="location-outline" size={60} color="#1E5BFF" />
      </View>

      <Text style={styles.title}>LOGISTICA</Text>
      <Text style={styles.subtitle}>Real-Time Fleet Tracking</Text>

      <View style={styles.feature}>
        <Ionicons name="car-outline" size={22} color="white" />
        <Text style={styles.featureText}>Track your fleet</Text>
      </View>

      <View style={styles.feature}>
        <Ionicons name="paper-plane-outline" size={22} color="white" />
        <Text style={styles.featureText}>Monitor drivers</Text>
      </View>

      <View style={styles.feature}>
        <Ionicons name="location-outline" size={22} color="white" />
        <Text style={styles.featureText}>Optimize routes</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  logoBox: {
    backgroundColor: "white",
    borderRadius: 25,
    padding: 25,
    marginBottom: 30,
  },
  title: {
    fontSize: 42,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 18,
    color: "white",
    marginBottom: 40,
  },
  feature: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  featureText: {
    color: "white",
    fontSize: 18,
    marginLeft: 12,
  },
});