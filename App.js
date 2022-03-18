import React,{useState} from 'react';
import { Text, View,StyleSheet,TextInput,Dimensions,Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
const width =  Dimensions.get('window').width;

function App() {
  const db = firestore().collection('EntryData');
  const [text,setText] = useState("");
  const date = new Date().toLocaleDateString()+", "+new Date().toLocaleTimeString();
  const timestamp = new Date().valueOf().toString();

   async function handlePress(){
        console.log(timestamp);  
       await db.doc(timestamp).set({
           Date:date,
           Entry:text
        })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        setText("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Journal
      </Text>
      <View style={styles.container1}>
        <TextInput
        style={styles.input}
        placeholder="Enter Your text..."
        onChangeText={setText}
        value={text}
        multiline={true}
        numberOfLines={20}
        />
      </View>
      <View style={styles.btn}>
      <Button
        title='Submit'
        onPress={handlePress}
      />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center"
  },
  label:{
    fontSize:25,
    fontWeight:"bold",
    color:"black",
    marginTop:'5%'
  },
  input:{
    height: 400,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop:'10%',
    overflow:'scroll',
    fontSize:16,
    textAlign:"center"
  },
  container1:{
    width:'90%'
  },
  btn:{
    marginTop:'10%',
    width:'80%'
  }
});
