import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Add from './components/Add';
import Icon from 'react-native-vector-icons/Ionicons';
import Items from './components/Items';

export default function App() {

  const [initialElements, changeEl]  = useState([
   
  ]);

  const [exampleState, setExampleState] = useState(initialElements);
  const [idx, incr] = useState(0);

  const addElement = () => {
    var newArray = [...initialElements , {id : idx, text:  (idx+1) }];
    //newArray.push(<Items/>)
    incr(idx + 1);
    //console.log(initialElements.length);
    setExampleState(newArray);
    changeEl(newArray);
  }

  return (
    <View style={styles.container}>
        <View style={styles.list}>
        <FlatList
            keyExtractor = {item => item.id}  
            data={exampleState}
            renderItem = {item => (<Items><Text>{item.item.text}</Text><Button></Button></Items>)} />
        </View>
       <View style={styles.bottom}>
       <Icon.Button
            name="add-circle"
            backgroundColor="#3b5998"        
          title="Add element"
          onPress={addElement}
  >Add Item</Icon.Button>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1
  },
  list:{
    paddingTop:50,
    
  },
  bottom:{
    
    alignItems:'center',
  },
});
