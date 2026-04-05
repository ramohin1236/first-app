import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, View } from "react-native";

const placeholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={placeholderImage} />
      </View>
      <View style={styles.footerContainer}>
          <Button label="Choose a Photo" theme="primary"/>
          <Button label="Use this photo"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#25292e",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 320,
    height: 480,
    borderRadius: 18,
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
  },
    footerContainer: {
    flex: 0.5/3
  }
});
