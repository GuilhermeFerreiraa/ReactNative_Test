import { Alert, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView, Text, View } from "react-native";
import Input from "../components/Input";
import CustomButtom from "../components/CustomButton";
import utils from "../utils";
import Loader from "../components/Loader";
import { useState } from "react";
import { updateUser } from "../services/UserController";

const EditUser = ({ route, navigation }) => {
  const { data } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(data);

  const handleInputChange = (text, field) => {
    setUser((prevState) => ({
      ...prevState,
      [field]: text,
    }));
  };

  const handleUpdateUser = async () => {
    setIsLoading(!isLoading)
    const res = await updateUser(user);
    Alert.alert(res.message);
    navigation.goBack();
    setIsLoading(!isLoading)
  };

  return (
    <ScrollView>
      <View safeArea style={styles.container}>
        <Text style={styles.title}>{`Editando "${data.name}"`}</Text>

        <View style={styles.container}>
          <Input
            label="*Nome"
            value={user.name}
            placeholder="Nome"
            returnKeyType="done"
            onChangeText={(v) => handleInputChange(v, "name")}
          />

          <Input
            label="*Sobrenome"
            returnKeyType="done"
            value={user.lastName}
            keyboardType="default"
            placeholder="Sobrenome"
            onChangeText={(v) => handleInputChange(v, "lastName")}
          />

          <Input
            label="*E-mail"
            value={user.email}
            placeholder="E-mail"
            keyboardType="email-address"
            error_text={"*E-mail Inválido!"}
            onChangeText={(v) => handleInputChange(v, "email")}
            error={data.email && !utils.validateEmail(data.email)}
          />

          <Input
            label="CPF"
            editable={false}
            value={utils.formatCPF(data.document)}
          />
        </View>

        <View style={styles.buttonContainer}>
          <CustomButtom onPress={handleUpdateUser} label="Salvar" />
          <CustomButtom
            outline
            label="Cancelar"
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      <Loader isOpen={isLoading} setIsOpen={setIsLoading} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    marginTop: 10,
    color: "#404040",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 600,
    color: "#404040",
    textDecorationLine: "underline",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
    gap: 6,
  },
  dateOfBirth: {
    minWidth: "100%",
    paddingLeft: 24,
    marginVertical: 14,
    alignItems: "flex-start",
    gap: 10,
  },
  dateOfBirthText: {
    fontSize: 14,
    textAlign: "left",
    color: "#404040",
    fontWeight: 600,
  },
  contianerDateOfBirth: {
    borderColor: "#e5e5e5",
    borderWidth: 2,
    width: "90%",
    marginVertical: 12,
    borderRadius: 6,
  },
});

export default EditUser;
