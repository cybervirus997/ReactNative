import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { ComponentsScreen } from './src/screens/ComponentsScreen'
import { ListOfData } from './src/screens/ListOfData'

import { ImageScreen } from './src/screens/ImageScreen'
import { Counter } from './src/screens/Counter'
import { RandomColor } from './src/screens/RandomColor'
import { ColorOpacityChanger } from './src/screens/ColorOpacityChanger'

import { SquareScreen } from './src/Components/SquareScreen'

import { ReducerCounter } from './src/CounterReducer/ReducerCounter'

import { TextScreen } from './src/TextInputBox/TextScreen'

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    ComponentsScreen: ComponentsScreen,
    ListOfData: ListOfData,
    ImageScreen: ImageScreen,
    Counter: Counter,
    RandomColor: RandomColor,
    ColorOpacityChanger: ColorOpacityChanger,
    SquareScreen: SquareScreen,
    ReducerCounter: ReducerCounter,
    TextScreen:TextScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
