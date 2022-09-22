import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, View,Image, Button} from 'react-native';
import Counter from "react-native-counters";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <View style={styles.headerLeft}>
       <Image  source={require('./assets/book.png')}></Image>
      
       </View>
       <View style={styles.headerRight}>
        <Text>Nguyên hàm tích phân và ứng dụng</Text>
        <Text>Cung cấp bởi Tiki Trading</Text>
        <Text style={{ color: 'red' }}>141.800 đ</Text>
        <Counter countTextStyle={{color:'black'}}buttonTextStyle={{color:'black'}} buttonStyle={{backgroundColor:'grey'}} start={1}></Counter><Text style={{color:'blue'}}>Mua sau</Text>
      </View>
      <Text>Mã giảm giá đã lưu <Text style={{color:'blue'}}>Xem tại đây</Text> </Text> 
      <View style={styles.headerBottom}>
        <View style={styles.magiamgia}>
          <View style={{backgroundColor:'yellow',width:30,height:20}}></View>
          <Text style={{paddingLeft:10,}}>Mã giảm giá</Text>
        </View>
        <View style={styles.apdung}>
        <Button title='Áp dụng'>Áp dụng</Button>
        </View>
      </View>
      </View>
      
      <View style={styles.center}>
        <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox<Text style={{color:'blue'}}>   Nhập tại đây ?</Text></Text>
      </View>
      <View style={styles.center2}>
        <Text style={{float:'left',fontSize:20}}>Tạm tính<Text style={{float:'right',color:'red',fontWeight:'bold'}}>             141.800 đ</Text></Text>
      </View>
      <View style={styles.footer}>
      <View style={styles.footer1}>
      <Text style={{float:'left',fontSize:20}}>Thành tiền<Text style={{float:'right',color:'red',fontWeight:'bold'}}>             141.800 đ</Text></Text>
      </View>
      <View style={styles.footer2}>
        <Button color='red' title='TIẾN HÀNH ĐẶT HÀNG'></Button>
      </View>
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    width:'100%',
  },
  header:{
    flex:3,
    backgroundColor:'white',
    flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
    
  },
  headerLeft:{
    padding:20,
    left:0,
    
  },
  headerRight:{
    right:0,
  },
  headerBottom:{
    width:'100%',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  magiamgia:{
    left:10,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width:'50%',
    bottom:0,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 0,
  },
  apdung:{
    width:'30%',
    marginLeft:30,
  },
  center:{
    flex:1,
    backgroundColor:'white',
    marginTop:10,
  },
  center2:{
    flex:1,
    backgroundColor:'white',
    marginBottom:10,
  },
  footer:{
    flex:1,
    backgroundColor:'white',
  },
  footer1:{
    flex:1,
  },
  footer2:{
    flex:1,
    paddingLeft:20,
    paddingRight:20,
   
  },

});
