import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1a1a1a',
      paddingTop: 70,
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
      backgroundColor: "#1a1a1a",
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
      padding: 10,
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
      flex: 1,
      alignItems: 'center',
    },
});

export default styles 
