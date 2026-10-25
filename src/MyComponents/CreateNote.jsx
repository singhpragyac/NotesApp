import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const CreatNote = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable style={styles.kebabBtn} onPress={() => setShowMenu(!showMenu)}>
        <Ionicons name="ellipsis-vertical" size={24} color="black" />
      </Pressable>
      {showMenu && (
        <View style={styles.menuContainer}>
          <Pressable
            style={styles.kebabText}
            onPress={() => setShowMenu(false)}
          >
            <Text>Save</Text>
          </Pressable>

          <Pressable
            style={styles.kebabText}
            onPress={() => setShowMenu(false)}
          >
            <Text>Delete</Text>
          </Pressable>
        </View>
      )}

      <TextInput
        style={styles.cardTitle}
        placeholder="Title"
        multiline={true}
        textAlignVertical="top"
      />
      <TextInput
        style={styles.cardText}
        placeholder="Type something..."
        multiline={true}
        textAlignVertical="top"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  cardTitle: {
    fontSize: 30,
    color: "black",
  },
  cardText: {
    fontSize: 18,
    color: "black",
  },
  kebabBtn: {
    position: "absolute",
    top: 10,
    right: 15,
    height: 45,
    width: 45,
    // borderRadius: 25,
    // backgroundColor: "rgba(204, 171, 212, 0.47)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 11,
    elevation: 6,
  },
  kebabText: {
    paddingVertical: 4,
    height: 30,
    width: 50,
    backgroundColor: "rgba(127, 199, 199, 0.4)",
    marginTop: 3,
    alignItems: "center",
  },
  menuContainer: {
    position: "absolute",
    top: 65,
    right: 15,
    zIndex: 10,
    elevation: 5,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 8,
  },
});

export default CreatNote;
