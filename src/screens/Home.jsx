import { SafeAreaView, Text, View } from "react-native";
import Input from "../components/Input";

import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Selector from "../components/Selector";
import utils from "../utils";
import ContainerSafeArea from "../components/ContainerSafeArea";

const HomeScreen = ({ navigation }) => {
  const [user, setUser] = useState({
    document: "",
    name: "",
    lastName: "",
    name: "",
    dateOfBirth: "",
    email: "",
    gender: "",
  });

  const [errors, setErrors] = useState([
    { field: "document", value: false, textMessage: "" },
    { field: "name", value: false, textMessage: "" },
    { field: "lastName", value: false, textMessage: "" },
    { field: "dateOfBirth", value: false, textMessage: "" },
    { field: "email", value: false, textMessage: "" },
    { field: "gender", value: false, textMessage: "" },
  ]);

  const handleInputChange = (text, field) => {
    setUser((prevState) => ({
      ...prevState,
      [field]: text,
    }));
  };

  const checkData = () => {
    if (utils.isValidCPF(user.document)) {
      console.log("========== CPF É VALIDO ! =============");
      console.log(user);
    } else {
      console.log("========== CPF É INVALIDO ! =============");
    }
  };

  const cleanForm = () => {
    setUser({
      document: "",
      name: "",
      lastName: "",
      name: "",
      dateOfBirth: "",
      email: "",
      gender: "",
    });
  };

  const handleNavigateListAllDataScreen = () => {
    navigation.navigate("ScreenListOfUsers");
  };

  return (
    <ContainerSafeArea>
      <ScrollView>
        <View safeArea style={styles.container}>
          <Text style={styles.title}>Vamos fazer o seu Cadastro?</Text>

          <Text
            style={styles.subtitle}
            onPress={handleNavigateListAllDataScreen}
          >
            {`Ver todos registros >`}
          </Text>

          <View style={styles.container}>
            <Input
              label="*CPF"
              placeholder="CPF"
              returnKeyType="done"
              value={utils.formatCPF(user.document)}
              keyboardType="decimal-pad"
              error={user.document && !utils.isValidCPF(user.document)}
              error_text={"CPF Inválido!"}
              onChangeText={(v) => handleInputChange(v, "document")}
            />

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
              value={user.dateOfBirth}
              label="*Data de Nascimento"
              placeholder="Data de Nascimento"
              onChangeText={(v) => handleInputChange(v, "dateOfBirth")}
            />

            <Input
              label="*E-mail"
              value={user.email}
              error={user.email && !utils.validateEmail(user.email)}
              error_text={"*E-mail Inválido!"}
              placeholder="E-mail"
              onChangeText={(v) => handleInputChange(v, "email")}
            />

            <Selector />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => checkData()}>
              <Text style={styles.buttonText}>Inserir</Text>
            </TouchableOpacity>
            {user && (
              <TouchableOpacity
                style={styles.buttonClean}
                onPress={() => cleanForm()}
              >
                <Text style={styles.buttonCleanFormText}>Recomeçar</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </ContainerSafeArea>
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
  button: {
    backgroundColor: "#007bff",
    padding: 6,
    borderRadius: 5,
    width: '40%',
    borderWidth: 2,
    borderColor: "#007bff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonClean: {
    backgroundColor: "transparent",
    padding: 6,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#007bff",
    width: '40%',
    alignItems: "center",
    justifyContent: "center",
  },
  buttonCleanFormText: {
    fontSize: 14,
    fontWeight: 600,
    color: "#007bff",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 600,
    color: "#ffff",
  },
});

export default HomeScreen;
