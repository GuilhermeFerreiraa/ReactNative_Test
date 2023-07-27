import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ onPress, label, style, outline = false }) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: "#007bff",
      padding: 6,
      borderRadius: 5,
      width: "40%",
      borderWidth: 2,
      borderColor: "#007bff",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      fontSize: 14,
      fontWeight: 600,
      color: "#ffff",
    },
    buttonOutline: {
      backgroundColor: "transparent",
      padding: 6,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "#007bff",
      width: "40%",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonOutlineText: {
      fontSize: 14,
      fontWeight: 600,
      color: "#007bff",
    },
  });

  return (
    !outline ? (
      <TouchableOpacity
        style={[outline && styles.buttonOutline, styles.button, style]}
        onPress={onPress}
      >
        <Text style={[outline && styles.buttonOutlineText, styles.buttonText]}>
          {label}
        </Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={[styles.buttonOutline, style]} onPress={onPress? onPress : () => {}}>
        <Text style={[styles.buttonOutlineText]}>{label}</Text>
      </TouchableOpacity>
    )
  )
};

export default CustomButton;
