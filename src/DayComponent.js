import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './styles';
import { Button, Text, View, Image} from 'react-native';
import { color } from 'react-native-reanimated';

export default function DayComponent({navigation}) {
  return (
  <ScrollView contentContainerStyle = {styles.dateContainer}>
    {/* <Button style = {{fontSize: 12, backgroundColor: '#00F', color: '#000'}} title = "Back" onPress = {() => {navigation.navigate("CalendarComponent")}}></Button>
    <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 30, alignSelf: 'center', textAlign: 'center'}}>{globalDate.toLocaleString('en-US').substr(0,globalDate.toLocaleString('en-US').indexOf(','))}</Text> */}
  </ScrollView>
)}