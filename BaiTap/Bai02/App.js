import { StatusBar } from 'expo-status-bar';
import { useRef, useState  } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Button, Image } from 'react-native';
import icon from './assets/rat.png'


export default function App() {
  var min=1;
  var max=500;
  const [location, setLocation] 
      = useState({
        x: null,
        y: null,
        marginLeft: new Animated.Value(Math.random()* (max - min) + min),
        marginTop: new Animated.Value(Math.random()* (max - min) + min),
        marginRight: new Animated.Value(Math.random()* (max - min) + min),
        marginBottom:new Animated.Value(Math.random()* (max - min) + min)

      });

  function onPress(evt){
       
    
    console.log('====================================');
    var x = evt.nativeEvent.locationX;
    console.log('====================================');
    console.log(x);
    console.log('====================================');
    var y = evt.nativeEvent.locationY;
    console.log('====================================');
    console.log(y);
    setLocation({
      x: x,
      y: y,
      marginLeft: x,
      marginTop: y,
      marginRight:y,
      marginBottom:x
    })
    
    
  }
  function onMove(evt){
     
    console.log('====================================');
    console.log(location);
    console.log('====================================');
    //setLocation({marginLeft: x, marginTop: y })
  }
  function onRelease(){
    console.log("Realse!");
  }
  const {marginTop, marginLeft,marginRight,marginBottom} = location;
  return (
    <View
      
      style={styles.container}>

      <Text>Show something!</Text>
     
      <Animated.Image
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease = {onRelease}
       source = {icon}
       style={{marginLeft: marginLeft, marginTop: marginTop,marginRight:marginRight,marginBottom:marginBottom}}
       >

      </Animated.Image>
      <Animated.Image
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease = {onRelease}
       source = {icon}
       style={{marginLeft: marginLeft, marginTop: marginTop,marginRight:marginRight,marginBottom:marginBottom}}
       >

      </Animated.Image>
      <Animated.Image
      onStartShouldSetResponder={()=>true}
      onMoveShouldSetResponder= {()=>true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease = {onRelease}
       source = {icon}
       style={{marginLeft: marginLeft, marginTop: marginTop,marginRight:marginRight,marginBottom:marginBottom}}
       >

      </Animated.Image>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
});