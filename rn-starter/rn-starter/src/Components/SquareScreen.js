import React, {useState,useReducer} from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { ColorScreen } from '../Components/ColorScreen'

const incOrDec = 15;

const reducer = (state, action) => { 
    switch (action.colorToChange) {
        case "red":
            return state.red + action.amount > 255 || state.red + action.amount < 0 ?
                state :                                        // if red is above 255 or below zero so it will return smae state (Basically eroor handling)
                { ...state, red: state.red + action.amount }   // { red:0,green:0,blue:0, red: 0+2 } so the red will be override here and make a new object
        case "green":
            return state.green + action.amount > 255 || state.green + action.amount < 0 ?
                state :                                             // if green is above 255 or below zero so it will return smae state (Basically eroor handling)
                { ...state, green: state.green + action.amount }   // { red:0,green:0,blue:0, green: 0+2 } so the green will be override here and make a new object
        case "blue":
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ?
                state :                                          // if blue is above 255 or below zero so it will return smae state (Basically eroor handling)
                { ...state, blue: state.blue + action.amount }   // { red:0,green:0,blue:0, blue: 0+2 } so the blue will be override here and make a new object
        default:
            return state;
    }
}

export const SquareScreen = () => { 

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });

    const { red, green, blue } = state;                  // destructuring the state alternative to it is use it like state.red,state.blue

    return (
        <View>
            <View>
                <ColorScreen onIncrease={() => dispatch({ colorToChange:"red", amount:incOrDec})}        // dispatch(action) we are sending action inside it
                            onDecrease={() => dispatch({ colorToChange:"red", amount:-1*incOrDec})} 
                            color="Red"         />
                <ColorScreen onIncrease={() => dispatch({ colorToChange:"green", amount:incOrDec})}
                            onDecrease={() => dispatch({ colorToChange:"green", amount:-1*incOrDec})}
                            color="Green" />
                <ColorScreen onIncrease={() => dispatch({ colorToChange:"blue", amount:incOrDec})}
                            onDecrease={() => dispatch({ colorToChange:"blue", amount:-1*incOrDec})}
                            color="Blue" />
            </View>

            <View style={{height:200,width:300,margin:30,backgroundColor:`rgb(${red},${green},${blue})`}}>

            </View>

        </View>    
    )
}













// Below code are useState manipulating the data of rgb

// export const SquareScreen = () => {

//     const [red, setRed] = useState(0);
//     const [green, setGreen] = useState(0);
//     const [blue, setBlue] = useState(0);

//     const booster = 35;

//     const color = (color, change) => {
//         switch (color) { 
//             case "red":
//                 red + change > 255 || red + change < 0 ? null : setRed(red + change);
//                 return;
//             case "green":
//                 green + change > 255 || green + change < 0 ? null : setGreen(green + change)
//                 return;
//             case "blue":
//                 blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
//                 return;
//             default:
//                 return;
//         }
//     }

//     return (
//         <View>
//             <View>
//                 <ColorScreen onIncrease={() => color("red",booster)}
//                             onDecrease={() => color("red",-1*booster)}
//                             color="Red"         />
//                 <ColorScreen onIncrease={() => color("green", booster)}
//                             onDecrease={() => color("green", -1*booster)}
//                             color="Green" />
//                 <ColorScreen onIncrease={() => color("blue", booster)}
//                             onDecrease={() => color("blue", -1 * booster)}
//                             color="Blue" />
//             </View>

//             <View style={{height:200,width:300,margin:30,backgroundColor:`rgb(${red},${green},${blue})`}}>

//             </View>

//         </View>    
//     )
// }
