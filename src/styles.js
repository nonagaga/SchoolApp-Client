import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
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
      backgroundColor: "#121212",
    },
    headerTitleStyle:{
      color: "#DDD",
    },
    rick:{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      width: 300,
      height: 300,
      resizeMode: 'contain'
    }
});

export default styles 
