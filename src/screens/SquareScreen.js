import React from 'react'
import { useReducer } from 'react'
import { Text,Button,StyleSheet, View } from 'react-native'
import ColorCounter from '../components/ColorCounter'


var reducer = (state,action) => {
    switch(action.colorToChange){
        case "red": return {...state, red : state.red + action.amount};
        case "blue":return {...state, blue : state.blue + action.amount};
        case "green":return {...state, green : state.green + action.amount};
        default: return state;
    }
}


const SquareScreen = () => {
    const COLOR_INCREMENT = 10;
    const [state,dispatch] = useReducer(reducer,{red : 0, blue : 0, green : 0})

    return (
        <View>

            <ColorCounter 
            onIncrease = {() => dispatch({colorToChange : "red" , amount : COLOR_INCREMENT})}
            onDecrease = {() => dispatch({colorToChange : "red" , amount : -1 * COLOR_INCREMENT})}
            color="Red"
            />

            <ColorCounter 
             onIncrease = {() => dispatch({colorToChange : "blue" , amount : COLOR_INCREMENT})}
             onDecrease = {() => dispatch({colorToChange : "blue" , amount : -1 * COLOR_INCREMENT})}
            color="Blue"
            />

            <ColorCounter 
             onIncrease = {() => dispatch({colorToChange : "green" , amount : COLOR_INCREMENT})}
             onDecrease = {() => dispatch({colorToChange : "green" , amount : -1 * COLOR_INCREMENT})}
            color="Green"
            />

            <View style={{height : 150 , width : 150 , backgroundColor : `rgb(${state.red},${state.green},${state.blue})`}}></View>

        </View>
    )
}

const styles = StyleSheet.create({})

export default SquareScreen
