import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
//<Image source={require("D:\University\Nam 5\LTMobile1\ThucHanh\LTMobil1_DongDucKhang\Lab01\image\circle.png")}></Image>
export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Image style={styles.image} source={require('./assets/lock.png')}></Image>
    </View>
    <View style={styles.center}>
        <Text style={styles.text}>FORGET PASSWORD</Text>
    </View>
    <View style={styles.center1}>
        <Text style={styles.text2}>Provide your account’s email for which you want to reset your password</Text>
    </View>
    <View style={styles.center2}>
        <View style={styles.leftEmail}>
        <Entypo name="mail" size={50} color="black" />
        </View>
        <View style={styles.rightEmail}>
          <Text style={styles.text3}>Email</Text>
        </View>
    </View>
    <View style={styles.footer}>
     <Text style={styles.next}>NEXT</Text>
    </View>
</View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'linear-gradient(to right, rgb(182, 244, 146), rgb(51, 139, 147))',
},
next:{
  backgroundColor:'orange',
  justifyContent:'center',
  alignItems:'center',
  height:40,
  backgroundColor:'orange',
  width:'100%',
  textAlign:'center',
  fontSize:30,
},
text3:{
  fontSize:20,
},
rightEmail:{
  marginLeft:20,
  marginTop:10,
},
leftEmail:{
  borderWidth: 1,
  borderColor: "black",
  borderRadius: 0,
},
header: {
    flex: 2,
    justifyContent:'center',
    alignItems:'center',
  
},
text:{
    fontWeight:'500',
    fontSize:30,
},
text2:{
    fontWeight:'bold',
    fontSize:20,
    
},
center: {
    flex: 1,
    alignItems:'center',
   
},
center1: {
    flex: 1,
    alignItems:'center',

},
center2:{
    flexDirection:'row',
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 0,
    height:50,
},


footer: {
    margin:30,
    flex: 1,
    alignItems:'center',
    justifyContent:'center',

},
});
