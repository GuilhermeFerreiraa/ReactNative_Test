// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import HomeScreen from "./src/screens/Home";
import ListData from "./src/screens/ListData";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Formulário" }}
          name="ScreenCreateUser"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ title: "Todos os Registros" }}
          name="ScreenListOfUsers"
          component={ListData}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
