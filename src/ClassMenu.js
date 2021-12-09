import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View, Image, TextInput} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';

export function ClassMenu() {
  const [disabled, setDisabled] = useState(true)
  const [buttonText, setButtonText] = useState('Edit')

  return (
    <View style = {styles.container}>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 1"></TextInput>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 2"></TextInput>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 3"></TextInput>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 4"></TextInput>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 5"></TextInput>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 6"></TextInput>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 7"></TextInput>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 8"></TextInput>
      <Button title = {buttonText} onPress = {() => {
        setDisabled(!disabled)
        if (buttonText == 'Edit'){
          setButtonText('Done')
        } else {
          setButtonText('Edit')}
        }}
        
        
        ></Button>
    </View>
  )
}

