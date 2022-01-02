import React from 'react'
import { Text, View,StyleSheet,FlatList } from 'react-native'

export const ListOfData = () => {

    const arr = [{ name: "somu",age:'23' }, { name: "cr7",age:'25' }, { name: "lm10",age:'13' }, { name: "ny11",age:'29' }]
    // const arr=["arr","fds","fds"]

    return (
        <View>
        <FlatList keyExtractor={(el)=>el.name} data={arr} renderItem={({item}) => { 
                return <Text style={styles.customizedText}> {item.name} - Age {item.age} </Text>
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    customizedText: {
        fontSize: 26,
        color: "steelblue",
        marginVertical:10
    }
})