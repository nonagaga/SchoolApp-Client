import React from 'react';
import { Text, Image, View} from 'react-native';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export function LunchMenu() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style = {styles.lunchMenuTitle}>Today's Menu</Text>
      <View style={styles.rickContainer}>
        <Image style = {styles.rick} source = {require('./img/ramen.png')}/>
        <Image style = {styles.rick} source = {require('./img/burger.jpeg')}/>
        <Image style = {styles.rick} source = {require('./img/pizza.jpeg')}/>
      </View>
    </ScrollView>
  );
}
