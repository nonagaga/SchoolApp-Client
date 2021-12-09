import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1a1a1a',
      padding: 20,
      // alignItems: 'center',
      // justifyContent: 'space-between',
    },
    horizontalContainer: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#1a1a1a',
      padding: 10,
    },
    title: {
      color: '#DDD',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    body: {
      color: '#DDD',
      fontSize: 20
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
    scheduleHeaderTitleStyle: {
      color: "#DDD",
      fontSize: 22,
      fontWeight: 'bold',
    },
    rickContainer: {
      alignItems: 'center',
      backgroundColor: '#1a1a1a',
    },
    rick:{
      width: 200,
      height: 200,
      marginBottom: 10,
    },
    lunchMenuTitle: {
      color: '#DDD',
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: '#1a1a1a',
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
    dateContainer: {
      flex: 1,
      alignItems: 'flex-start',
      backgroundColor: '#1a1a1a',
      padding: 10,
    },
});

export default styles 
