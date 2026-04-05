import { StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props ={
    imgSource: any;
}

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 350,
    objectFit: "cover",
    borderRadius: 18,
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
  }

});
