import React from 'react';
import { Text,View,StyleSheet,Button,TouchableOpacity } from 'react-native';
import { ComponentsScreen } from './ComponentsScreen'

const HomeScreen = ({navigation}) => {

  return (
    <View>
      <Button style={styles.customButton} title="Home" onPress={() => navigation.navigate("ListOfData")} />
      
      <TouchableOpacity onPress={() => navigation.navigate("ComponentsScreen")} >
        < Text style={styles.customButton}>secound Button</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("ImageScreen")} >
        <Text style={styles.customButton}>Image part</Text>
      </TouchableOpacity>

      <Button title="counterApp" onPress={() => navigation.navigate("Counter")} />
      <Text></Text>
      <Button title="Generate RandomColor" onPress={() => navigation.navigate("RandomColor")} />
      <Text></Text>
      <Button title="Opacity/intensity Controller " onPress={() => navigation.navigate("ColorOpacityChanger")} />
      <Text></Text>
      <Button title="Opacity/intensity Controller(callback-method) " onPress={() => navigation.navigate("SquareScreen")} />
      <Text></Text>
      <Button title="Counter with reducer " onPress={() => navigation.navigate("ReducerCounter")} />
      <Text></Text>
      <Button title="way Text Input box " onPress={() => navigation.navigate("TextScreen")}/>

    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  customButton: {
    marginVertical:10,
    fontSize: 20,
    backgroundColor: "red",
    textAlign: "center"
  }
});

export default HomeScreen;
