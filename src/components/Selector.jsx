import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Selector = ({ handleChangeValue }) => {
  const placeholder = {
    label: "Selecionar Gênero..",
    value: null,
    color: "#404040",
  };

  const items = [
    { label: "Masculino", value: "male" },
    { label: "Feminino", value: "female" },
    { label: "Outros", value: "others" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione um gênero:</Text>
      <RNPickerSelect
        placeholder={placeholder}
        items={items}
        onValueChange={handleChangeValue}
        style={{
          inputIOS: {
            fontSize: 16,
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 4,
            color: "black",
          },
          inputAndroid: {
            fontSize: 12,
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderWidth: 2,
            borderColor: "#e5e5e5",
            backgroundColor: "#e5e5e580",
            borderRadius: 20,
            color: "#404040",
          },
        }}
      />
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
