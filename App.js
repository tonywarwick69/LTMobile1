import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home'
import DetailScreen from './screens/Details'
import ColorScreen from './screens/Colors'
import RedColorScreen from './screens/ColorRed'
import BlackColorScreen from './screens/ColorBlack'
import BlueColorScreen from './screens/ColorBlue'
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="Colors" component={ColorScreen} />
        <Stack.Screen name="RedColor" component={RedColorScreen}/>
        <Stack.Screen name="BlackColor" component={BlackColorScreen}/>
        <Stack.Screen name="BlueColor" component={BlueColorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack