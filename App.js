import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ActivityIndicator,Modal,Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import axios from 'axios';


export default function App() {
  //init values
  //if loaded show data else show loading circle
  const [isLoading,setLoading]=useState(true);
  //declare data as array[]
  const [data,setData]=useState([])
  //delcare text as empty string
  const [text,setText]= useState('');
  //show or hide View when TextInput onClick
  const [shouldShow, setShouldShow] = useState(true);
  const getData = async () =>{
    try{
      const response= await fetch('https://6347859cdb76843976acdaff.mockapi.io/api/buoi07/place');
      //convert data you get to json data
      const json= await response.json();
      setData(json);
      //console.log(`Data:`,json);
    } catch(error){
      console.log(error);
  }  finally{
    setLoading(false);
  }
  }
  //Save button
  const handleSubmitData = (text) =>{
    console.log('check value:',text);
    axios.post('https://6347859cdb76843976acdaff.mockapi.io/api/buoi07/place',{
      "PlaceName":`${text}`,
      
    }).then((response)=>{
      console.log("Here's what you upload: ",response.data)
      getData()
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  //clear TextInput after press Save
  const clearInput = (val) =>{
    setText('');
  }
  /*The useEffect Hook allows you to perform side effects in your components. 
  Some examples of side effects are: fetching data, directly updating the DOM, and timers. 
  useEffect accepts two arguments. 
  The second argument is optional*/
  useEffect(()=>{
    getData();
  }, []);
  //delete
  const onDelete = (id) =>{
    axios.delete(`https://6347859cdb76843976acdaff.mockapi.io/api/buoi07/place/${id}`)
    .then((response)=>{
      console.log(`List after delete id ${id}: `,response.data)
      getData();
    })
    .catch((err)=>{
      console.log(err)
    })
  }
 
  //update
  const [showModal, setShowModal] = useState(false);
  const [textUpdate,setTextUpdate]= useState('');
  const updateAPIData = (id) => {
    axios.put(`https://6347859cdb76843976acdaff.mockapi.io/api/buoi07/place/${id}`, {
      "PlaceName":`${textUpdate}`,
	})
  setShowModal(false);
  getData();

}
   return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inputField}>
          <Image
          style={styles.tinyLogo}
          source={require('./assets/Vector.png')}/>
          <TextInput placeholder='The place that you will visit in the future'
          onChangeText={(text) => setText(text)}
          value={text} onPressIn={()=> setShouldShow(!shouldShow)}
          onEndEditing={()=> setShouldShow(true)}
          ></TextInput>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity style={styles.buttonStyle}
          onPress={()=> {handleSubmitData(text),clearInput(text)}}>
            <Text  style={styles.titleText}>SAVE</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text  style={styles.titleText} onPress={()=> setShouldShow(true)}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </View>
      {shouldShow ? (
      <View style={styles.listView}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList numColumns="1"
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({item})=>(
            <View>
                    <TouchableOpacity style={styles.resultList} key={item.id} >
              <View style={styles.leftList}>
                <Text style={{fontSize:25}}>{item.id}.</Text>
                <Text style={{fontSize:25}}> {item.PlaceName}</Text>
              </View>
              <View style={styles.rightList}>
              <TouchableOpacity name={item.id} value={item.id}  >
                <FontAwesome name="edit" size={30} color="black"onPress={() => {
            setShowModal(!showModal);}} />
              </TouchableOpacity>
              <TouchableOpacity name={item.id} value={item.id} onPress={()=>{onDelete(item.id)}}>
               <MaterialIcons name="delete-forever" size={30} color="black" />
              </TouchableOpacity>
              </View>
            </TouchableOpacity>
             <Modal
             animationType={'slide'}
             transparent={false}
             visible={showModal}
             onRequestClose={() => {
               console.log('Modal has been closed.');
             }}>
             {/*All views of Modal*/}
             {/*Animation can be slide, slide, none*/}
             <View style={styles.modal}>
               <Text>{item.id}</Text>
               <TextInput placeholder='Type Place Name to Update'  onChangeText={(textUpdate) => setTextUpdate(textUpdate)}
          value={textUpdate}></TextInput>
               <View >
                 <TouchableOpacity style={styles.buttonStyle} onPress={()=>updateAPIData(item.id)}>
                   <Text>Update</Text>
                 </TouchableOpacity>
               </View>
               <Button 
                 title="Click To Close Modal"
                 onPress={() => {
                   setShowModal(!showModal);
                 }}
               />
             </View>
           </Modal>
            </View>
          )}>
          </FlatList>
        )}
      </View>
     ) : null}
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
    backgroundColor:'white',
    flex:1,
    flexDirection:'column',
    justifyContent:'space-between',
    marginBottom:30,
    
  },
  inputField:{
    backgroundColor:'lightgray',
    flexDirection:'row',
    margin:30,
  },
  buttons:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20,
   
  },
  buttonStyle:{
    backgroundColor:'orange',
    width:110,
    height:60,
    justifyContent:'center',
    alignItems:'center',
    fontSize:30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff'
    
  },
  listView:{
    backgroundColor:'white',
    flex:2,
  },
  titleText:{
    fontSize:25,
    fontWeight:'bold',
  },
  resultList:{
    flexDirection:'row',
    backgroundColor:'#aadccd',
    borderRadius:5,
    borderWidth: 5,
    borderColor: '#fff',
    marginLeft:5,
    marginRight:5,
  },
  leftList:{
    flexDirection:'row',
    width:'50%',
  },
  rightList:{
    flexDirection:'row',
    width:'50%',
    justifyContent:'flex-end',
    justifyContent:'space-between'
  },
});
