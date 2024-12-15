import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "",
        }}
        style={styles.avatar}
      />
      <Text style={styles.name}>Wagnyu</Text>
      <Text style={styles.description}>
        A creative developer exploring the world of React Native.
      </Text>
      <Button title="Edit Profile" buttonStyle={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#e8f5e9",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    borderRadius: 20,
    paddingHorizontal: 20,
  },
});

export default ProfileScreen;
