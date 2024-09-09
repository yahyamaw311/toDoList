import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Dimensions, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Tache from '../components/tache';

const color1 = "#000000";
const color2 = "#282A3A";
const color3 = '#735F32';
const color4 = '#C69749';

export default function App() {

    const [tache, setTache] = useState('');
    const [tacheList, setTacheList] = useState([]);

    const onTacheAjout = () => {
        setTacheList([...tacheList, {
            tache: tache,
            index: tacheList.length
        }]);
    }

    return (
      <View style={styles.container}>
        <View style={styles.inputAreaView}>
          <TextInput
              style={[styles.input]}
              placeholder='Entez une tache'
              placeholderTextColor= "white"
              onChangeText={text => setTache(text)}
          />

          <TouchableOpacity 
            style={styles.addButton}
            onPress={onTacheAjout}>
              <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.tacheListView}>
            {/* {tacheList.map((tache, index) => (
                <Tache tache={tache} index={index} />
            ))} */}
            <FlatList
                data={tacheList}
                renderItem={({item}) => <Tache tache={item}/>}/>
        </ScrollView>

        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: color1,
    alignItems: 'center',
  },
  inputAreaView:{
    width: Dimensions.get("window").width,
    height: 60,
    flexDirection: 'row'
  },
  input: {
    width: "80%",
    borderWidth: 1,
    backgroundColor: color2,
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  addButton: {
    width: "20%",
    height: "100%",
    backgroundColor: color4,
  },
  addButtonText: {
    fontSize: 40,
    margin: "auto"
  },
  tacheListView: {
    marginTop: 40,
  }
});