import React, {useReducer} from 'react'
import { View,Text,StyleSheet,Button } from 'react-native'

const reducer = (state,action) => { 
    switch (action.type)
    {
        case "add": return {...state,initState: state.initState + action.payload};
        case "sub":return {...state,initState: state.initState - action.payload};
        default: return state;
    }
}


export const ReducerCounter = () => {

    const [state, dispatch] = useReducer(reducer, { initState: 0 })
    const { initState } = state;

    return (
        <View>
            <Text style={styles.customText}>counter : {initState}</Text>
            <Button title="add" onPress={() => { 
                dispatch({ type: "add", payload: 1 });
                console.log(typeof(initState))
            }
            } />
            <Button title="sub" onPress={() => {  dispatch({ type:"sub",payload:1})  }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    customText: {
        fontSize: 30,
        textAlign:"center",
    }
})