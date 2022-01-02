import React from 'react'
import { Text, View ,StyleSheet,FlatList,Image} from 'react-native'

export const Picstore = ({name,pic,score}) => {
    return (
        <View style={styles.redbox}>
            <Image source={pic} />
            <Text style={styles.textStyle}>{name}</Text>
            <Text style={styles.textStyle}>Image Score : {score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
   redbox: {
      height: 200,
      backgroundColor: 'red',
      marginVertical: 20,
      marginLeft: 40,
      marginRight: 40,
      justifyContent: 'center',
      padding:50
    },
    textStyle: {
        fontSize: 23,
        textAlign: 'center'
    }
})