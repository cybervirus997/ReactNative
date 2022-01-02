import React, {useState} from 'react'
import { View,Text,StyleSheet,Button,TouchableOpacity } from 'react-native'

export const ColorOpacityChanger = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View>
            <Text>Red controller</Text>
            <Button title="+" onPress={()=>setRed(red+1)}/>
            <Button title="-" onPress={()=>setRed(red-1)}/>
            <Text></Text>
            <Text>Green controller</Text>
            <Button title="+" onPress={()=>setGreen(green+1)} />
            <Button title="-" onPress={()=>setGreen(green+1)} />
            <Text></Text>
            <Text>Blue controller</Text>
            <Button title="+" onPress={()=>setBlue(blue+1)} />
            <Button title="-" onPress={()=>setBlue(blue+1)} />
            <Text></Text>

            <View style={{height:200,backgroundColor:`rgb(${red},${green},${blue})`}}></View>

        </View>
    )
}
