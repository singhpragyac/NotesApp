import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreatNote from "../MyComponents/CreateNote";
import NoteHomePage from "../MyComponents/NotesHomePgae";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Notes App"
          component={NoteHomePage}
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
        />
        <Stack.Screen name="CreateNote" component={CreatNote} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
