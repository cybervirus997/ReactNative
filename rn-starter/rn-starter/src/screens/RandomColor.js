import React, {useState} from 'react'
import { Text,View,StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'

export const RandomColor = () => {

    const [colors, setColor] = useState([])

    return (
        <View>
            <Button title="Add colors" onPress={() => setColor([...colors,colorGen()])} />
            
            <FlatList data={colors}
                keyExtractor={(el) =>el}
                renderItem={({ item }) => { 
                   return <View style={{ height: 100, width: 100, backgroundColor: item }}></View>
                } }/> 
        </View>
    )
}

const colorGen = () => { 
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    
    return `rgb(${r},${g},${b})`
}

const styles = StyleSheet.create({
    textSizee: {
        fontSize:24
    }
})


//rgb((Math.random()*225).toFixed(0),(Math.random()*225).toFixed(0),(Math.random()*225).toFixed(0)