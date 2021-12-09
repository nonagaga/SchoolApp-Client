import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import themes from './themes'
import { ClassMenu } from './ClassMenu';
import { LunchMenu } from './LunchMenu';
import { CalendarMenu } from './CalendarMenu';
import { ScrollView } from 'react-native-gesture-handler';

const Tab = createBottomTabNavigator();

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

      <Tab.Screen name="Home" component={HomeNavigator}
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

function HomeNavigator() {
  const Stack = createNativeStackNavigator()
  return(
    <NavigationContainer independent={true} style = {styles.container}>
      <Stack.Navigator screenOptions = {{headerShown: false}} style = {styles.container}>
        <Stack.Screen name="HomeScreen" component= {HomeScreen} options = {{headerStyle: styles.headerStyle, headerTitleStyle: styles.headerTitleStyle, tabBarStyle: styles.headerStyle}}></Stack.Screen>
        <Stack.Screen name="LunchMenu" component={LunchMenu} options = {{headerStyle: styles.headerStyle, headerTitleStyle: styles.headerTitleStyle, tabBarStyle: styles.headerStyle}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <Text style = {styles.title}>Welcome to the CGSH School App!</Text>
      <Button title = 'Lunch Menu' onPress = {() => {navigation.navigate("LunchMenu")}}></Button>
    </ScrollView>)
}
