import React from 'react'
import { StyleSheet, Text, View, ViewInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export const Add = () => {
    const addElement = () => {
        var newArray = [...initialElements , {id : idx, text:  (idx+1) }];
        incr(idx + 1);
        console.log(initialElements.length);
        setExampleState(newArray);
        changeEl(newArray);
      }
  return (
    <Icon.Button
    title="Add element"
          onPress={addElement}/>
  
  )
}
export default Add;
