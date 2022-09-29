import  React, {useState} from 'react'
import {View, Button,Text,StyleSheet, TouchableOpacity} from 'react-native'

/*
 
*/
export const Colors = ({navigation}) => {
  const [listColor, setListColor]=useState([1,2,3,4])
  return (
   <View style={styles.container}>
    <View style={styles.header}>

    </View>
    <View style={styles.body}>
      <View style={styles.body1}>
        <Text>Chọn một màu bên dưới:</Text>
      </View >
      <View style={styles.body2} >
          <TouchableOpacity style={styles.lightBlue} onPress={()=> navigation.navigate('Home')}></TouchableOpacity>
          <TouchableOpacity style={styles.red} onPress={()=> navigation.navigate('RedColor')}></TouchableOpacity>
          <TouchableOpacity style={styles.black} onPress={()=> navigation.navigate('BlackColor')}></TouchableOpacity>
          <TouchableOpacity style={styles.blue} onPress={()=> navigation.navigate('BlueColor')}></TouchableOpacity>
          <View style={styles.footer}>
            <Button title="XONG"></Button>
          </View>
    
      </View>
     
    </View>
   </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  
},
header:{
  flex:1,
  backgroundColor:'yellow',
},
body:{
  flex:3,
  
},
body1:{
  height:'10%'
},
body2:{
  height:'90%',
  alignItems:'center',
  justifyContent:'center'
},
lightBlue:{
  width:'30%',
  height:60,
  backgroundColor:'#ADD8E6',
  marginBottom:15,
  color:'#ADD8E6',

},
red:{
  width:'30%',
  height:60,
  backgroundColor:'red',
  marginBottom:15,
  color:'red',
},
black:{
  width:'30%',
  height:60,
  backgroundColor:'black',
  marginBottom:15,
  color:'black',
},
blue:{
  width:'30%',
  height:60,
  backgroundColor:'blue',
  marginBottom:15,
  color:'blue',
},
footer:{
  width:'100%',
  height:'15%',
  backgroundColor:'white',
  bottom:0,
},

});
export default Colors;