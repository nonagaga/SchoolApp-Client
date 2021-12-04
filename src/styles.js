import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
      paddingTop: 10,
      padding: 10,
      // alignItems: 'center',
      // justifyContent: 'center',
    },
    title: {
      color: '#DDD',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    buttons:{
      fontSize: 20,
      backgroundColor: '#00F',
      color: '#000',
    },
    headerStyle:{
      backgroundColor: "#121212",
    },
    headerTitleStyle:{
      color: "#DDD",
      fontSize: 30,
      fontWeight: 'bold',
    },
    rick:{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      width: 300,
      height: 300,
      resizeMode: 'contain'
    },
    calendarEvent:{
      flex: 1,
      backgroundColor: '#3d7bad',
      borderLeftColor: '#52b1ff',
      borderLeftWidth: 2,
      alignItems: 'center',
      justifyContent: 'center'
    },
    calendarEventText:{
      color: '#004d8c',
      fontSize: 17,
      fontWeight: 'bold',
    },
    calendarDay:{
      backgroundColor: '#636363'
    },
});

export default styles 