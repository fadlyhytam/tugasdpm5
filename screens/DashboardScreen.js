import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DashboardScreen = ({ navigation }) => {
  const menuItems = [
    { id: "1", title: "Overview", icon: "view-dashboard-outline", screen: "Details" },
    { id: "2", title: "Home", icon: "home-outline", screen: "Home" },
  ];

  const renderItem = (item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.menuItem}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Icon name={item.icon} size={32} color="#3b82f6" />
      <Text style={styles.menuText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Hello, User!</Text>
      </View>

      <View style={styles.menuContainer}>
        {menuItems.map(renderItem)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    backgroundColor: "#3b82f6",
    padding: 50,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  menuContainer: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start", // Tampilan vertikal dimulai dari atas
  },
  menuItem: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    marginVertical: 10, // Spasi vertikal antar tombol
    padding: 20,
    alignItems: "center",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  menuText: {
    marginLeft: 15, // Jarak teks dari ikon
    fontSize: 16,
    fontWeight: "500",
    color: "#374151",
  },
});

export default DashboardScreen;
