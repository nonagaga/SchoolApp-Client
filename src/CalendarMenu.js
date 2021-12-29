import React, {useEffect} from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CalendarList } from 'react-native-calendars';
import styles from './styles';
import themes from './themes';
import DayComponent from './DayComponent';

const academy = {key: 'academy', color: 'yellow', selectedDotColor: 'yellow'};
const club = {key: 'club', color: 'blue', selectedDotColor: 'blue'};
const general = {key: 'general', color: 'orange', selectedDotColor: 'orange'};
const local = {key: 'local', color: 'pink', selectedDotColor: 'pink'};
const school = {key: 'school', color: 'red', selectedDotColor: 'red'};
const sports = {key: 'sports', color: 'green', selectedDotColor: 'green'};
const student = {key: 'student', color: 'white', selectedDotColor: 'white'};
const Stack = createNativeStackNavigator();
export function CalendarMenu() {

  return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="CalendarComponent" component={CalendarComponent}/>
          <Stack.Screen name="DayComponent" component={DayComponent}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

function CalendarComponent({ navigation }) {
    console.log(navigation)
    useEffect(() => {fetch("https://warm-retreat-27016.herokuapp.com/?month=12&year=2021").then(res => res.json())
        .then((result) => console.log(result)), (error) =>
        console.log(error)})
  return (<View style={styles.container}>
    <CalendarList displayLoadingIndicator theme={themes.calendarTheme} markingType={'multi-dot'}
      onDayPress={(day) => {
        console.log(day.dateString);
        navigation.navigate("DayComponent", {date: day.dateString});
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