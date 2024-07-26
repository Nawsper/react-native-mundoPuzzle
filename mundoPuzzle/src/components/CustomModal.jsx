import { StyleSheet, Text, View, Modal, Button } from "react-native";
import React from "react";

export default function CustomModal({
  handleCancel,
  handleDelete,
  modalView,
  itemSelected,
}) {
  return (
    <Text>CustomModal</Text>
    // <Modal visible={modalView} transparent={true} animationType="slide">
    //   <View style={styles.modalStyles}>
    //     <View style={styles.modalContainer}>
    //       <View style={styles.textContainer}>
    //         <Text style={styles.textModal}>
    //           Estas seguro que quieres borrar?
    //         </Text>
    //       </View>
    //       <View style={styles.textContainer}>
    //         <Text style={styles.textModal}></Text>
    //       </View>
    //       <View style={styles.textContainer}>
    //         <Button
    //           style={styles.btncontainer}
    //           onPress={handleCancel}
    //           title="Cancelar"
    //         />
    //         <Button
    //           style={styles.btncontainer}
    //           onPress={handleDelete}
    //           title="Borrar"
    //         />
    //       </View>
    //     </View>
    //   </View>
    // </Modal>
  );
}

const styles = StyleSheet.create({
  modalStyles: {
    backgroundColor: "#cccc66",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    padding: 10,
  },
  btncontainer: {
    flexDirection: "row",
    gap: 20,
  },
  textModal: {
    fontWeight: "bold",
  },
});
