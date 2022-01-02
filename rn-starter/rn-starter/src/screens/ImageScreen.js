import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { Picstore } from './Picstore'

export const ImageScreen = () => {

    return (
       <View style={styles.container}>
          <Picstore name="Beach" pic={require('../../assets/beach.jpg')} score="6" />
          <Picstore name="Forest" pic={require('../../assets/forest.jpg')} score="7"/>
          <Picstore name="Mountains" pic={require('../../assets/mountain.jpg')} score="9"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#3FB9DA',
      height: 720,
   }
})