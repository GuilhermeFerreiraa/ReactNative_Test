import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";

const Loader = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ActivityIndicator size="large" color="#000ff0" />
          <Text>Carregando...</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  deleteButton: {
    color: "red",
    marginTop: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.40)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-around",
    width: '60%',
    height: 160,
  },
});

export default Loader;
