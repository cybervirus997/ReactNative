import React, {useState} from 'react'
import { View,Text,StyleSheet,TextInput,Button } from 'react-native'

export const TextScreen = ({navigation}) => {

    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");

    return (
        <View>
            <Text>Enter name</Text>
            <TextInput style={styles.InputBox} value={name} onChange={(e) => setName(e)} />
            {name.length < 4 ? <Text>need more alphabets!</Text> : null}
            <Text>Enter userName</Text>
            <TextInput style={styles.InputBox} value={userName} onChange={(e) => setUserName(e)} />
            {userName.length < 4 ? <Text>Strong password buddy</Text> : null}
            
            <Button title="submit" onPress={() => navigation.navigate("Home")}/>

        </View>
    )
}

const styles = StyleSheet.create({
    InputBox: {
        margin: 15,
        borderColor: "red",
        borderWidth: 5,
        padding:10
    }
})