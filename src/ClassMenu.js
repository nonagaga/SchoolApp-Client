import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useState} from 'react';
import { Button, Text, TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';

// export function ClassMenu() {
//   const Stack = createNativeStackNavigator()
//   return(
//     <NavigationContainer independent={true}>
//       <Stack.Navigator>
//         <Stack.Screen name="Schedule" component={Schedule} options={{headerStyle: styles.headerStyle, headerTitleStyle: styles.headerTitleStyle, tabBarStyle: styles.headerStyle}}></Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

export function ClassMenu() {
  const [disabled, setDisabled] = useState(true)
  const [buttonText, setButtonText] = useState('Edit')

  return (
    <ScrollView style = {styles.scheduleContainer} contentContainerStyle = {{alignItems: "center"}}>
      <Text style = {styles.classMenuTitle}>My Classes</Text>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 1" placeholderTextColor = "#777" keyboardAppearance='dark'></TextInput>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 2" placeholderTextColor = "#777" keyboardAppearance='dark'></TextInput>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 3" placeholderTextColor = "#777" keyboardAppearance='dark'></TextInput>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 4" placeholderTextColor = "#777" keyboardAppearance='dark'></TextInput>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 5" placeholderTextColor = "#777" keyboardAppearance='dark'></TextInput>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 6" placeholderTextColor = "#777" keyboardAppearance='dark'></TextInput>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 7" placeholderTextColor = "#777" keyboardAppearance='dark'></TextInput>
      <TextInput style = {styles.body} editable = {!disabled} placeholder = "Period 8" placeholderTextColor = "#777" keyboardAppearance='dark'></TextInput>
      <Button title = {buttonText} onPress = {() => {
        setDisabled(!disabled)
        if (buttonText == 'Edit') {
          setButtonText('Done')
        } else {
          setButtonText('Edit')
        }}}
        ></Button>
    </ScrollView>
  )
}
