import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
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

function HomeScreen() {
  return (
  <ScrollView style={styles.container}>
    <Text style = {styles.title} >Welcome to the School Stuff Application!</Text>
    <LunchMenu/>
    <StatusBar style="auto" />
  </ScrollView>)
}
