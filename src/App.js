import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import {CalendarList} from 'react-native-calendars';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import themes from './themes'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

export default function App() {
  console.log("App started!")
  return (
  <NavigationContainer theme = {themes.navigationContainerTheme}>
    <Tab.Navigator initialRouteName="Home" screenOptions = {({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if(route.name === 'Home'){
          iconName = focused ? "md-home" : "md-home-outline"
        } else if (route.name === 'Lunch'){
          iconName = focused ? "fast-food" : "fast-food-outline"
        } else if (route.name === 'Calendar'){
          iconName = focused ? 'ios-calendar' : 'ios-calendar-outline'
        }
        return <Ionicons name={iconName} size={24} color={"white"}></Ionicons>
      }
    })}>

      <Tab.Screen name="Home" component={HomeScreen}
        options={{headerStyle: styles.headerStyle, headerTitleStyle: styles.headerTitleStyle, tabBarStyle: styles.headerStyle
      }}></Tab.Screen>

      <Tab.Screen name="Lunch" component={LunchMenu}
        options={{headerStyle: styles.headerStyle, headerTitleStyle: styles.headerTitleStyle, tabBarStyle: styles.headerStyle
      }}></Tab.Screen>

      <Tab.Screen name="Calendar" component={CalendarMenu}
      options={{headerStyle: styles.headerStyle, headerTitleStyle: styles.headerTitleStyle, tabBarStyle: styles.headerStyle
      }}></Tab.Screen>

    </Tab.Navigator>
  </NavigationContainer>);
}

function HomeScreen({navigation}) {
  return (
  <View style={styles.container}>
    <Text style = {styles.title} >Welcome to the School Stuff Application!</Text>
    <Button style = {styles.buttons} title="School"></Button>
    <Button onPress = {() => navigation.navigate('Lunch')} style={styles.buttons} title="Lunch Menu" backgroundColor='#000'></Button>
    <StatusBar style="auto" />
  </View>)
}

function LunchMenu() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lunch Options:</Text>
      <Image style = {styles.rick} source = {require('./img/ramen.png')}/>
    </ScrollView>
  )
}

function CalendarMenu() {
  return (
    <NavigationContainer independent = {true}>
      <Stack.Navigator screenOptions ={{headerShown: false}}>
        <Stack.Screen name = "CalendarComponent" component = {CalendarComponent}></Stack.Screen>
        <Stack.Screen name = "DayComponent" component = {DayComponent}></Stack.Screen>
    </Stack.Navigator>
    </NavigationContainer>
  )
}
function CalendarComponent({navigation}) {
  return ( <View style={styles.container}>
    <CalendarList theme={themes.calendarTheme} markingType={'multi-dot'} markedDates={{
      '2021-12-04': { selected: true, marked: true, selectedColor: '#3d97e0' },
      '2021-12-05': { marked: true },
      '2021-12-06': { marked: true, dotColor: 'red', activeOpacity: 0 },
      '2021-12-07': { disabled: true, disableTouchEvent: true }
    }}
      onDayPress={(day) => {navigation.navigate("DayComponent")} }></CalendarList>
  </View>
  )
}

function DayComponent({navigation}) {
  return (
  <ScrollView contentContainerStyle = {styles.dateContainer}>
    <Button style = {styles.buttons} title = "Back" onPress = {() => {navigation.navigate("CalendarComponent")}}></Button>
    <Text>Date{/*apiData.date*/}</Text>
  </ScrollView>
)}

