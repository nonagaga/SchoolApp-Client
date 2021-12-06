import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Text, View, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from './styles';
import { TextInput } from 'react-native-gesture-handler';

var schedule = {
  period1: {subject: "", teacher: ""},
  period2: {subject: "", teacher: ""},
  period3: {subject: "", teacher: ""},
  period4: {subject: "", teacher: ""},
  period5: {subject: "", teacher: ""},
  period6: {subject: "", teacher: ""},
  period7: {subject: "", teacher: ""},
  period8: {subject: "", teacher: ""},
}

export function ClassMenu() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer style={styles.container} independent={true}>
      <Stack.Navigator>
        <Stack.Screen name='Schedule' component={Schedule} options={{
          headerStyle: styles.headerStyle, headerTitleStyle: styles.scheduleHeaderTitleStyle, tabBarStyle: styles.headerStyle
        }} />
        <Stack.Screen name='ScheduleInputMenu' component={ScheduleInputMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Schedule({navigation}) {
  return (
    <View style={styles.container}>
        <PeriodComponent index = '1' style = {styles.body}></PeriodComponent>
        <Button title="Edit" onPress={() => {navigation.navigate("ScheduleInputMenu")}}></Button>
    </View>
  );
}

function PeriodComponent(props) {
    return(
    <View style = {styles.horizontalContainer}>
        <Text style = {styles.body}>{"Period " + props.index.toString() + ": " + schedule.period1.teacher}</Text>
    </View>
    )
}

function ScheduleInputMenu() {
  return (
    <View style={styles.container}>
      <ScheduleInputComponent period = {schedule.period1}/>
      <ScheduleInputComponent period = {schedule.period2}/>
      <ScheduleInputComponent period = {schedule.period3}/>
      <ScheduleInputComponent period = {schedule.period4}/>
      <ScheduleInputComponent period = {schedule.period5}/>
      <ScheduleInputComponent period = {schedule.period6}/>
      <ScheduleInputComponent period = {schedule.period7}/>
      <ScheduleInputComponent period = {schedule.period8}/>
    </View>
  );
}

//FIX THIS!
function ScheduleInputComponent(props) {
  return (
    <View>
      <TextInput style={{ color: 'white', fontSize: 30, alignSelf: 'center' }} placeholder="First Period Class" placeholderTextColor='gray' onChange ={
        ({ nativeEvent: { eventCount, target, text} }) => {props.period = {subject: "", teacher: text}}
        } ></TextInput>
    </View>
  );
}
