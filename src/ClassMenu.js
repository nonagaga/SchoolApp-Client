import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {Button, Text, TextInput, Linking, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator()

async function storeData(value) {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('@data', jsonValue)
    } catch (e) {
        console.log("Saving Error!")
    }
}


async function getData() {
    try {
        const jsonValue = await AsyncStorage.getItem('@data')
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        // error reading value
    }
}



function ScheduleMenu() {
    const [disabled, setDisabled] = useState(true)
    const [buttonText, setButtonText] = useState('Edit')
    const [data, setData] = useState({periods: [{teacher: "teacher", emailAddress: "email"}, ]})
    storeData(JSON.stringify({periods: [{teacher: "Grapel", emailAddress: "igrapel@dadeschools.net"}]})).catch("Error Storing Data!")
    getData().then((result) => {
        setData(JSON.parse(result))
        console.log("Retrieved Data!")
    }, (error) => {
        console.log("Data Retrieval Error")
    })
        return (
            <ScrollView style={styles.scheduleContainer} contentContainerStyle={{alignItems: "center"}}>
                <PeriodComponent data = {data.periods[0]}/>
                <PeriodComponent data = {data.periods[1]}/>
            </ScrollView>
        )
}

function PeriodComponent(props) {
    let teacher = "teacher"
    let email = "email"

    if (props.data != null) {
        teacher = props.data.teacher
        email = props.data.emailAddress
    }

    return(
        <View>
            <Button disabled={true} title = {teacher} style = {styles.body}/>
            <Button onPress={() => {
                Linking.openURL('mailto:' + email)
            }} title={email}/>
        </View>
    )
}

export function ClassMenu() {
    return(
    <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name={"ScheduleMenu"} component={ScheduleMenu}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}
