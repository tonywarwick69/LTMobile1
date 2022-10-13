import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, ScrollView, ActivityIndicator, FlatList  } from 'react-native';

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //get user name from api to react native
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
  //get text of InputText
  const [text,setText] = useState('');

  const handleSubmitData = (text) => {
    console.log('check value: ', text)
    axios.post('https://6347859cdb76843976acdaff.mockapi.io/api/buoi07/user', {
        "name": `${text}`,
        
    })
        .then((response) => {
            console.log('here is what you upload: ', response.data)
            getName()
        })
        .catch((err) => {
            console.log(err)
        })
}
/*
const getData = () => {
  axios.get(`https://6347859cdb76843976acdaff.mockapi.io/api/buoi07/user`)
      .then((getData) => {
           setData(getData.data);
       })
       .catch((err) => {
        console.log(err)
    })
}
*/
/*
const getDataByName = (name) => {
  axios.get(`https://6347859cdb76843976acdaff.mockapi.io/api/buoi07/user`)
      .then((getData) => {
        if(name===getDataByName.data.name){
          axios.get(`https://6347859cdb76843976acdaff.mockapi.io/api/buoi07/user/${getDataByName.data.id}`)
          .then((getData)=>{
            setData(getData.data);
          })
        }
          
           
       })
}
*/
//text for delete
const [text2,setText2] = useState('');
const onDelete = (id) => {
    id=text2;
    axios.delete(`https://6347859cdb76843976acdaff.mockapi.io/api/buoi07/user/${id}`)
    .then((response) => {
      console.log('here is what you upload: ', response.data)
      getName()
  })
  .catch((err) => {
      console.log(err)
  })
}

  return (
    
    <View style={styles.container}> 
      <View style={styles.header}>
        <View style={styles.searchField}>
          <Image style={styles.imageUser} source={require('./assets/Vector.png')}></Image>
          <TextInput onChangeText={(text) => setText(text)}
                    value={text} style={styles.inputText} placeholder="Put name to add"></TextInput> 
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity  onPress={() => handleSubmitData(text)} style={styles.buttonStyle}>
            <Text>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete(text2)} style={styles.buttonStyle}>
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
              <TouchableOpacity style={styles.itemList} key={item.id} value={item.id} name={item.id} onPress={(text2) => setText2(item.id)}>
                <Text style={{fontSize:25,marginLeft:20,}}>{item.name}</Text>
                
              </TouchableOpacity>
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
    
  },
  contentList:{
    flex:1,
  },
  itemList:{
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 5,
    backgroundColor:"#46AD7C"
  }
});
