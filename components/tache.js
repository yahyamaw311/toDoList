import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";



export default Tache = (props) => {
    
    return(
        <ScrollView horizontal={true}>
           <Text style={styles.tacheView}>{props.tache.index + 1}. {props.tache.tache}</Text> 
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    tacheView: {
        maxHeight: 50,
        height: 50,
        marginBottom: 20,
        width: Dimensions.get("window").width - 20,
        backgroundColor: "#282A3A",
        color: "white",
        fontSize: 25,
        paddingLeft: 10, 
        textAlignVertical: "center"
    }
  });