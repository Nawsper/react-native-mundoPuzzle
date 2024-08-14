import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useState } from "react";
import { colors } from "../global/colors";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { usePostProfileImageMutation } from "../services/shopServices";
import { setCameraImage } from "../features/user/UserSlice";

const ImageSelector = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [triggerPostImage, result] = usePostProfileImageMutation();
  const dispatch = useDispatch();
  const { localId } = useSelector((state) => state.auth.value);
  console.log(localId);

  const verifyCameraPermisson = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (!status) {
      return false;
    }
    return true;
  };

  const pickImage = async () => {
    const isCameraOk = await verifyCameraPermisson();
    if (isCameraOk) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        base64: true,
        quality: 0.2,
      });

      if (!result.canceled) {
        setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      }
    }
  };

  const confirmImage = () => {
    try {
      dispatch(setCameraImage(image));
      triggerPostImage({ image, localId });
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <>
          <Image
            style={styles.img}
            resizeMode="cover"
            source={{ uri: image }}
          />
          <Pressable
            onPress={pickImage}
            style={({ pressed }) => [
              styles.btn,
              { opacity: pressed ? 0.6 : 1 },
            ]}
          >
            <Text style={colors.clrLight}>Tomar nueva foto</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.btn,
              { opacity: pressed ? 0.6 : 1 },
            ]}
            onPress={confirmImage}
          >
            <Text style={colors.clrLight}>Confirmar foto</Text>
          </Pressable>
        </>
      ) : (
        <>
          <View style={styles.containerPhoto}>
            <Text>No hay foto para mostrar...</Text>
          </View>
          <Pressable
            onPress={pickImage}
            style={({ pressed }) => [
              styles.btn,
              { opacity: pressed ? 0.6 : 1 },
            ]}
          >
            <Text style={colors.clrLight}>Tomar una foto</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default ImageSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  btn: {
    marginTop: 10,
    backgroundColor: colors.clrPastel1,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 7,
    borderRadius: 5,
  },
  img: {
    marginVertical: 20,
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  containerPhoto: {
    marginVertical: 20,
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
