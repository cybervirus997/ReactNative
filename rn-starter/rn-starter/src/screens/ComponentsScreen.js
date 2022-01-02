import React from 'react'
import { Text, View,StyleSheet} from 'react-native'

export const ComponentsScreen = () => {
    return (
        <View style={{backgroundColor: 'red'}}>
            <Text style={styles.textStyle}>
                Hello world!
            </Text>
            <Text style={styles.textStyle}>
                Hello world!
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 24
    }
})