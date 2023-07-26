import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Selector = () => {
  const [selectedGenre, setSelectedGenre] = useState(""); // Estado para armazenar o gênero selecionado

  // Função para atualizar o estado quando um gênero é selecionado
  const handleGenreChange = (itemValue) => {
    setSelectedGenre(itemValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione um gênero:</Text>
      <Picker
        selectedValue={selectedGenre}
        onValueChange={handleGenreChange}
        style={styles.picker}
      >
        <Picker.Item label="Selecione" value="" enabled={false} />
        <Picker.Item label="Masculino" value="male" />
        <Picker.Item label="Feminino" value="female" />
        <Picker.Item label="Outros" value="others" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    display: "flex",
    minWidth: "100%",
  },
  label: {
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 8,
  },
  picker: {
    backgroundColor: "#ffffff",
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#e5e5e5",
    paddingHorizontal: 8,
  },
});

export default Selector;
