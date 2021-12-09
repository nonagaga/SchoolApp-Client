import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CalendarList } from 'react-native-calendars';
import { useEffect, useState } from 'react';
import styles from './styles';
import themes from './themes';
import DayComponent from './DayComponent';
import { append } from 'domutils';

const academy = {key: 'academy', color: 'yellow', selectedDotColor: 'yellow'};
const club = {key: 'club', color: 'blue', selectedDotColor: 'blue'};
const general = {key: 'general', color: 'orange', selectedDotColor: 'orange'};
const local = {key: 'local', color: 'pink', selectedDotColor: 'pink'};
const school = {key: 'school', color: 'red', selectedDotColor: 'red'};
const sports = {key: 'sports', color: 'green', selectedDotColor: 'green'};
const student = {key: 'student', color: 'white', selectedDotColor: 'white'};

export function CalendarMenu() {
  // const [calendarData, setCalendarData] = useState([]);
  // const [isLoading, setLoading] = useState(true);

  // const getCalendarData = async () => {

  //   try {
  //     const response = await fetch(
  //       'https://warm-retreat-27016.herokuapp.com/?month=01&year=2022'
  //     );
  //     const json = await response.json();
  //     //console.log(json);
  //     setCalendarData(json);
  //     console.log("JSON received: " + )
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   getCalendarData();
  // }, []);

  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="CalendarComponent" component={CalendarComponent}></Stack.Screen>
          <Stack.Screen name="DayComponent" component={DayComponent}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

function CalendarComponent(props, { navigation }) {

  const [calendarData, setCalendarData] = useState({})

  useEffect(() => {
    fetch('https://warm-retreat-27016.herokuapp.com/?month=01&year=2022')
    .then((response) => response.json())
    .then(calendar => {
      setCalendarData(calendar)
  })})

  return (<View style={styles.container}>
    <CalendarList displayLoadingIndicator theme={themes.calendarTheme} markingType={'multi-dot'} markedDates={calendarData}
      onDayPress={(day) => {
        console.log(day.dateString);
        // var date = new Date();
        // date.setFullYear(day.dateString.substring(0, 4), day.dateString.substring(5, 7), day.dateString.substring(8, 10));
        // globalDate = date;
        // navigation.navigate("DayComponent");
      }}
      >

      </CalendarList>
  </View>
  );
}

function ParseDots({data}) {
    var dots = []
    data.array.forEach(day => {
        if (day.events != null){
            var dayEvents = []
            day.events.forEach(dayEvent => {
                if (!dayEvents.includes(ParseCategory(dayEvent.category))){
                    dayEvents.append(ParseCategory(dayEvent.category))
                }
            })
            dots.append(day, {dots: dayEvents})
        }
    });
    //console.log(dots)
    return(dots)
}

function ParseCategory({CategoryString}) {
    switch (CategoryString) {
        case "General":
            return general
            break
        case "Club Meetings":
            return club
            break
        case "Academy Events":
            return academy
            break
        case "Local Ecents":
            return local
            break
        case "School Calendar":
            return school
            break
        case "Sporting Events":
            return sports
            break
        case "Student Events":
            return student
            break
    }
    return null
}