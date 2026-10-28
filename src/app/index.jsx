import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import CreateNote from "../MyComponents/CreateNote";
import NoteHomePage from "../MyComponents/NotesHomePgae";

const Stack = createNativeStackNavigator();

const App = () => {
  const [allnotes, setAllNotes] = useState([]);
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
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="CreateNote">
          {(props) => (
            <CreateNote
              {...props}
              allnotes={allnotes}
              setAllNotes={setAllNotes}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
