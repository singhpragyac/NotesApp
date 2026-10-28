import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
const NoteHomepage = ({ navigation, allnotes, setAllNotes }) => {
  const [showMenu, setShowMenu] = useState(null);

  const handleDelete = (id) => {
    console.log("Delete ID:", id);
    console.log("All Notes:", allnotes);

    setAllNotes((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.noteApp}>Notes App</Text>
      <TextInput style={styles.searchBar} placeholder="Search note..." />

      <FlatList
        data={allnotes}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 10 }}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Pressable
              style={styles.kebabBtn}
              onPress={() => setShowMenu(showMenu === item.id ? null : item.id)}
            >
              <Ionicons name="ellipsis-vertical" size={24} color="black" />
            </Pressable>
            {showMenu === item.id && (
              <View style={styles.menuContainer}>
                <Pressable
                  style={styles.kebabText}
                  onPress={() => handleDelete(item.id)}
                >
                  <Text>Delete</Text>
                </Pressable>
              </View>
            )}
            <Text
              style={styles.cardTitle}
              numberOfLines={1}
              ellipsizeMode="..."
            >
              {item.title}
            </Text>
            <Text style={styles.cardText} numberOfLines={5} ellipsizeMode="...">
              {item.description}
            </Text>
          </View>
        )}
      />
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
  card: {
    backgroundColor: "rgba(229, 196, 229, 0.53)",
    width: "48%",
    minHeight: "auto",
    maxHeight: 400,
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 23,
  },
  cardTitle: {
    fontSize: 20,
    color: "black",
    fontWeight: "500",
    flexShrink: 1,
  },
  cardText: {
    fontSize: 16,
    color: "black",
    flexShrink: 1,
  },
  kebabBtn: {
    position: "absolute",
    top: 5,
    right: 1,
    // height: 50,
    // width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  kebabText: {
    paddingVertical: 4,
    height: 30,
    width: 50,
    backgroundColor: "rgba(127, 199, 199, 0.4)",
    marginTop: 3,
    alignItems: "center",
  },
});
export default NoteHomepage;
