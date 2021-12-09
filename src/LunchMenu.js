import React from 'react';
import { Text, Image, View, Button} from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export function LunchMenu({navigation}) {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{alignItems:'center'}}>
      <Button title='Back' onPress={()=>{navigation.navigate("HomeScreen")}}></Button>
      <Text style = {styles.lunchMenuTitle}>Today's Menu</Text>
        <Image style = {styles.rick} source = {require('./img/ramen.png')}/>
        <Text style = {{color:'white', fontSize:20, alignSelf: 'center', justifyContent: 'space-evenly'}}>Ramen</Text>
        <Image style = {styles.rick} source = {require('./img/burger.jpeg')}/>
        <Text style = {{color:'white', fontSize:20, alignSelf: 'center', justifyContent: 'space-evenly'}}>Hamburger</Text>
        <Image style = {styles.rick} source = {require('./img/pizza.jpeg')}/>
        <Text style = {{color:'white', fontSize:20, alignSelf: 'center', justifyContent: 'space-evenly'}}>Pizza</Text>
    </ScrollView>
  );
}
