import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, Text, View, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda} from 'react-native-calendars';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';
import theme from './calendarTheme';

const Tab = createBottomTabNavigator();

export default function App() {
  console.log("App started!")
  return (
  <NavigationContainer>
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
    <Button onPress = {() => navigation.navigate('Lunch Menu')} style={styles.buttons} title="Lunch Menu" backgroundColor='#000'></Button>
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
    <View style={styles.container}>
      <Text style={styles.title}>Calendar</Text>
      <Agenda theme={theme} items={{
        '2021-12-3': [{name: 'item 1 - any js object'}],
        '2021-12-4': [{name: 'item 2 - any js object', height: 80}],
        '2021-12-5': [],
        '2021-12-6': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
      }}></Agenda>
    </View>
  )
  }
