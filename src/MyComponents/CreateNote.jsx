import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

const CreatNote = ({
  navigation,
  allnotes,
  setAllNotes,
  title,
  setTitle,
  description,
  setDescription,
  editNote,
  setEditNote,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const handlesave = () => {
    if (editNote !== null) {
      console.log("editNote", editNote);
      setAllNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === editNote ? { ...note, title, description } : note,
        ),
      );
      navigation.goBack();
      setTitle("");
      setDescription("");
      setEditNote(null);
    } else {
      const newNotes = {
        id: Date.now(),
        title: title,
        description: description,
      };
      setAllNotes((prevNotes) => [...prevNotes, newNotes]);
      setTitle("");
      setDescription("");
      setShowMenu(false);
      navigation.goBack();
      console.log(allnotes);
    }
  };

  const handleDelete = () => {
    setTitle("");
    setDescription("");
    setShowMenu(false);
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.kebabBtn}
        onPress={() => setShowMenu((prev) => !prev)}
      >
        <Ionicons name="ellipsis-vertical" size={24} color="#94288b" />
      </Pressable>
      {showMenu && (
        <View style={styles.menuContainer}>
          <Pressable style={styles.menuItem} onPress={handlesave}>
            <Text style={styles.kebabText}>
              {editNote !== null ? "Edit Note" : "Add Note"}
            </Text>
          </Pressable>

          <Pressable style={styles.menuItem} onPress={handleDelete}>
            <Text style={styles.kebabText}>Delete</Text>
          </Pressable>
        </View>
      )}

      <TextInput
        style={styles.cardTitle}
        placeholder="Title"
        placeholderTextColor={"#66155f"}
        multiline={true}
        textAlignVertical="top"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.cardText}
        placeholder="Type something..."
        placeholderTextColor={"#66155f"}
        multiline={true}
        textAlignVertical="top"
        value={description}
        onChangeText={setDescription}
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
    color: "#66155f",
  },
  cardText: {
    fontSize: 18,
    color: "#66155f",
  },
  kebabBtn: {
    position: "absolute",
    top: 10,
    right: 15,
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 11,
    elevation: 6,
  },
  menuItem: {
    paddingVertical: 4,
    height: 30,
    width: 70,
    marginTop: 3,
  },
  kebabText: {
    color: "#ad67a8",
    fontWeight: "bold",
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
