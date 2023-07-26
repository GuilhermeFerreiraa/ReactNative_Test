import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DeleteModal = ({
  isOpen,
  setIsOpen,
  onPress,
  label_cancel,
  label_confirmAction,
  title_modal,
}) => {
  const handleCloseModal = () => setIsOpen(false);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isOpen}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text>{title_modal ? title_modal : "Você tem certeza?"}</Text>
          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.modalCancelButton]}
              onPress={handleCloseModal}
            >
              <Text style={styles.modalButtonText}>
                {label_cancel ? label_cancel : "Não"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.modalButton, styles.modalDeleteButton]}
              onPress={onPress}
            >
              <Text style={[styles.modalButtonText, styles.confirmActionText]}>
                {label_confirmAction ? label_confirmAction : "Sim"}
              </Text>
            </TouchableOpacity>
          </View>
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
    flex: 0.15,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  modalCancelButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#ff4040",
  },
  modalDeleteButton: {
    backgroundColor: "#ff4040",
  },
  modalButtonText: {
    color: "#ff4040",
    fontWeight: "bold",
  },
  confirmActionText: {
    color: "white",
  },
});

export default DeleteModal;
