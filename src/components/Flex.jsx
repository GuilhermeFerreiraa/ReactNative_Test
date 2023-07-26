import { StyleSheet, View } from "react-native";

const Flex = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

const styles = StyleSheet.create({
 container: {
   display: 'flex',
   flexDirection: 'row',
 },
});

export default Flex;
