import { FontAwesome } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";


type Props ={
    label: any;
    theme?: "primary" 
}

export default function Button({ label, theme }: Props) {
 
     if(theme === "primary"){
        return(
            <View style={styles.buttonContainer}>
                <Pressable
                style={[styles.button, {backgroundColor: "blue"}]}
                onPress={()=> alert("Your pressed button")}
                >
                    <FontAwesome style={styles.buttonIcon} name="photo" size={16} color="white" />
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        )
     }
 
 
 
 
    return(
    <View style={styles.buttonContainer}> 
        <Pressable
        style={styles.button}
        onPress={()=> alert("Your pressed button")}
        >
             <Text style={styles.buttonLabel}>{label}</Text>
         </Pressable>
     </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        padding: 3
    },
    button:{
      borderRadius: 10,
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      backgroundColor: "green",
    },
    buttonIcon:{
     paddingRight: 8
    },
    buttonLabel: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
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
});


