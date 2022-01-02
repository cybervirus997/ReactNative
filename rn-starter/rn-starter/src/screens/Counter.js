import React, {useState} from 'react'
import { View,Text,StyleSheet,Button } from 'react-native'

export const Counter = () => {

    const [state,setState]=useState(0)

    return (
        <View>
            <Text style={styles.textAbove}>Count:{state}</Text>
            <Button title="inc" onPress={()=>setState(state+1)} />
            <Button title="dec" onPress={()=>setState(state-1)} />
        </View>
    )
}

const styles = StyleSheet.create({
    textAbove: {
        textAlign: "center",
        fontSize:25
    }  
})