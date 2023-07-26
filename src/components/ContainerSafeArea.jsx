import { SafeAreaView, StyleSheet } from "react-native";

const ContainerSafeArea = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default ContainerSafeArea;
