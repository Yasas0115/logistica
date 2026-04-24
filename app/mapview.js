import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>LOGISTICA</Text>
        <Text style={styles.user}>Welcome, Demo User</Text>
      </View>

      <View style={styles.mapArea}>
        <Ionicons name="location" size={40} color="#1E5BFF" />
      </View>

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Map</Text>
        <Text style={styles.navItem}>Drivers</Text>
        <Text style={styles.navItem}>Vehicles</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },
  header: {
    backgroundColor: "#1E5BFF",
    padding: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  user: {
    color: "white",
    marginTop: 5,
  },
  mapArea: {
    flex: 1,
    margin: 20,
    borderRadius: 20,
    backgroundColor: "#EAEFF5",
    alignItems: "center",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    right: 25,
    bottom: 100,
    backgroundColor: "#1E5BFF",
    padding: 18,
    borderRadius: 50,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "white",
  },
  navItem: {
    fontSize: 16,
    fontWeight: "600",
  },
});