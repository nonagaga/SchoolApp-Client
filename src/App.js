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
import DayComponent from './DayComponent'
import { ClassMenu } from './ClassMenu';

const Tab = createBottomTabNavigator();

const academy = {key: 'academy', color: 'yellow', selectedDotColor: 'yellow'};
const club = {key: 'club', color: 'blue', selectedDotColor: 'blue'};
const general = {key: 'general', color: 'orange', selectedDotColor: 'orange'};
const local = {key: 'local', color: 'pink', selectedDotColor: 'pink'};
const school = {key: 'school', color: 'red', selectedDotColor: 'red'};
const sports = {key: 'sports', color: 'green', selectedDotColor: 'green'};
const student = {key: 'student', color: 'white', selectedDotColor: 'white'};

global.globalDate = Date()

export default function App() {
  console.log("App started!")
  return (
  <NavigationContainer style = {styles.container} theme = {themes.navigationContainerTheme}>
    <Tab.Navigator initialRouteName="Home" screenOptions = {({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if(route.name === 'Home'){
          iconName = focused ? "md-home" : "md-home-outline"
        } else if (route.name === 'Classes'){
          iconName = focused ? "documents" : "documents-outline"
        } else if (route.name === 'Calendar'){
          iconName = focused ? 'ios-calendar' : 'ios-calendar-outline'
        }
        return <Ionicons name={iconName} size={24} color={"white"}></Ionicons>
      }
    })}>

      <Tab.Screen name="Home" component={HomeScreen}
        options={{headerStyle: styles.headerStyle, headerTitleStyle: styles.headerTitleStyle, tabBarStyle: styles.headerStyle
      }}></Tab.Screen>

      <Tab.Screen name="Classes" component={ClassMenu}
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
    <StatusBar style="auto" />
  </View>)
}

function LunchMenu() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lunch Options:</Text>
      <Image style = {styles.rick} source = {require('./img/ramen.png')}/>
    </ScrollView>
  )
}

function CalendarMenu() {
  const Stack = createNativeStackNavigator()
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
    '2021-12-05': {dots: [academy, school, sports]},
    '2021-12-06': {dots: [sports]}
  }}
      onDayPress={(day) => {
        console.log(day.dateString)
        var date = new Date()
        date.setFullYear(day.dateString.substring(0,4), day.dateString.substring(5, 7), day.dateString.substring(8,10))
        globalDate = date
        navigation.navigate("DayComponent")
        } }></CalendarList>
  </View>
  )
}