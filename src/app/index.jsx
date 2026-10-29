import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import CreateNote from "../MyComponents/CreateNote";
import NoteHomePage from "../MyComponents/NotesHomePgae";

const Stack = createNativeStackNavigator();

const App = () => {
  const [allnotes, setAllNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editNote, setEditNote] = useState(null);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Notes App"
          options={{
            title: "Notes App",
            headerStyle: {
              backgroundColor: "#754e72",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: "bold",
            },
          }}
        >
          {(props) => (
            <NoteHomePage
              {...props}
              allnotes={allnotes}
              setAllNotes={setAllNotes}
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              editNote={editNote}
              setEditNote={setEditNote}
            />
          )}
        </Stack.Screen>
        <Stack.Screen
          name="CreateNote"
          options={{
            title: "Create Notes",
            headerStyle: {
              backgroundColor: "#d4acd1",
            },
            headerTintColor: "white",
          }}
        >
          {(props) => (
            <CreateNote
              {...props}
              allnotes={allnotes}
              setAllNotes={setAllNotes}
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              editNote={editNote}
              setEditNote={setEditNote}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
