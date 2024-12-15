import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

const DetailsScreen = () => {
  const openYouTubeLink = () => {
    const url = "";
    Linking.openURL(url).catch((err) => console.error("An error occurred", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <Image
        source={{ uri: "https://placeimg.com/640/480/tech" }}
        style={styles.image}
      />
      <Button
        title="Watch on YouTube"
        icon={<Icon name="play-circle-outline" size={24} color="#fff" />}
        buttonStyle={styles.button}
        onPress={openYouTubeLink}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#FF5722",
    padding: 15,
    borderRadius: 10,
  },
});

export default DetailsScreen;
