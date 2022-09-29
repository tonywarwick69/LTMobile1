import  React, {useState} from 'react'
import {View, Button,Text,Image,StyleSheet} from 'react-native'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ColorBlack = ({navigation}) => {

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={{}} source={require('../assets/vsmart_black_star1.png')}></Image>
        </View>
        <View style={styles.body}>
         <View>
          <Text style={{ fontSize:20,fontWeight:'bold',}}>Điện thoại Vsmart Joy 3 - Hàng chính hãng </Text>
         </View>
          <View style={styles.rating}>
          <Stars
                default={5}
                count={5}
                half={true}
                starSize={150}
                fullStar={<Icon name={'star'} style={[styles.myStarStyle]}/>}
                emptyStar={<Icon name={'star-outline'} style={[styles.myStarStyle, styles.myEmptyStarStyle]}/>}
                halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]}/>}/><Text>  Xem 828 dánh giá</Text>
                
          </View>
         <View style={styles.price}>
         <Text style={{fontSize:25}}>1.790.000  </Text> 
           <Text style={{textDecorationLine:'line-through',fontSize:25}}> 1.790.000</Text> 
         </View>
         <Text style={{color:'red',fontSize:20,}}>Ở đâu rẻ hơn hoàn tiền</Text>
         <View style={styles.footer1}>
          <Button  onPress={()=> navigation.navigate('Colors')} title='4 MÀU CHỌN MÀU     >' ></Button>
          
         </View>
         <View style={styles.footer2}>
         <Button onPress={()=> navigation.navigate('Details')} title='Chọn mua'></Button>
         </View>
        </View>
        
    </View>
   
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
  },
 
  header: {
      flex: 2,
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems: 'center',
      paddingTop:10,
     
    
  },
  body:{
    flex:1,
  
    fontWeight:'bold',
   
  },
  rating:{
   flexDirection:'row',
   flexWrap: "wrap",
 
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  price:{
    flexDirection:'row',
    flexWrap: "wrap",
  },
  footer1:{
   paddingBottom:15,
   
   alignItems:'center',
  },
  footer2:{
    alignItems:'center',
  
   },
});
export default ColorBlack;