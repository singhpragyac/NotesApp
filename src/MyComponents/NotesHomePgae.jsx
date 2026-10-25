import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
const notehomepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.noteApp}>Notes App</Text>
      <TextInput style={styles.searchBar} placeholder="Search note..." />

      <Pressable
        style={styles.addNotesBtn}
        onPress={() => navigation.navigate("CreateNote")}
      >
        <Ionicons name="add" size={45} color="purple" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  noteApp: {
    color: "black",
    fontSize: 20,
    fontWeight: "800",
    paddingVertical: 10,
  },
  searchBar: {
    width: 280,
    height: 50,
    borderWidth: 1,
    borderRadius: 50,
    fontSize: 18,
    paddingHorizontal: 15,
  },
  addNotesBtn: {
    position: "absolute",
    top: 610,
    left: 310,
    height: 60,
    width: 60,
    backgroundColor: "rgba(204, 171, 212, 0.47)",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default notehomepage;
