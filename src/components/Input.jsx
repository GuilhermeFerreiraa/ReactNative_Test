import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native";

const Input = ({ label, error, error_text, ...rest }) => {
  const style = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "100%",
      gap: 8,
    },
    containerText: {
      minWidth: "90%",
    },
    label: {
      fontSize: 14,
      textAlign: "left",
      color: error ? "#f04040" : "#404040",
      fontWeight: 600,
    },
    input: {
      minWidth: "90%",
      maxWidth: "90%",
      margin: 0,
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 6,
      borderWidth: 2,
      borderColor: error ? "#f04040" : "#e5e5e5",
      backgroundColor: "white",
      fontSize: 16,
    },
    placeholderText: {
      color: error ? "#f04040" : "#404040",
    },
    error: {
      color: "#f04040",
    },
  });

  return (
    <View style={style.container}>
      {label && (
        <View style={style.containerText}>
          <Text style={style.label}>{label ? label : "Título"}</Text>
        </View>
      )}
      <TextInput
        placeholderTextColor={style.placeholderText}
        style={style.input}
        {...rest}
      />
      {error && (
        <View style={style.containerText}>
          <Text style={style.error}>{error_text}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
