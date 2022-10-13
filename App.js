import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, FlatList  } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getName = async () => {
    try {
      const response = await fetch('https://6347859cdb76843976acdaff.mockapi.io/api/buoi07/user');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getName();
  }, []);
  return (
    
    <View style={styles.container}> 
      <View style={styles.header}>
        <View style={styles.searchField}>
          <Image style={styles.imageUser} source={require('./assets/Vector.png')}></Image>
          <TextInput style={styles.inputText} placeholder="Put name to add"></TextInput> 
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text>Remove</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <View style={styles.contentList}>
        {isLoading ? <ActivityIndicator /> : (
          <FlatList
          numColumns="1"
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <View style={styles.itemList}key={item.id}>
                <Text>{item.name}</Text>
                
              </View>
            )}
          />
        )}
      </View>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    
    justifyContent: 'center',
  },
  header:{
    
    marginTop:30,
    flex:1,
  },
  searchField:{
    flexDirection:'row',
    backgroundColor:'lightgray',
    border: '5px solid black',
    height:70,
    paddingLeft:50,
    
  },
  imageUser:{
   marginTop:25,
  },
  inputText:{
   paddingLeft:20,
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20,
   
  },
  buttonStyle:{
    backgroundColor:'#0033cc',
    width:64,
    height:40,
    alignItems:'center',
    fontSize:'large',
  },
  contentList:{
    flex:1,
  },
  itemList:{
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50,
  }
});
