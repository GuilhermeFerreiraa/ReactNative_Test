import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import ListData from "../screens/ListData";
import EditUser from "../screens/EditUser";

const Routes = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ title: "Formulário" }}
        name="ScreenCreateUser"
        component={Home}
      />
      <Stack.Screen
        options={{ title: "Todos os Registros" }}
        name="ScreenListOfUsers"
        component={ListData}
      />

      <Stack.Screen
        options={{ title: "Editar Usuário" }}
        name="EditUserScreen"
        component={EditUser}
      />
    </Stack.Navigator>
  );
};

export default Routes;
