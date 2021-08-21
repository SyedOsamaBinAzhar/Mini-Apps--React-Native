import React, { useReducer } from 'react'
import { View,Text,StyleSheet,Button } from 'react-native'


const reducer = (state,actions) => {
   switch(actions.type){
       case "Increment":
           return state + actions.payload
        case "Decrement":
            return state + actions.payload
   }
}


const CounterScreen = () => {
    var [state,dispatch] = useReducer(reducer,0)


    return (
        <View>
            <Text>Counter Screen</Text>
            <Button 
            title="Increase"
            onPress={() => 
            dispatch({type : "Increment", payload : 1})
        }
            />

            <Button 
            title="Decrease"
            onPress={() => 
            dispatch({type : "Decrement" , payload : -1})
            
        }
            /> 
            <Text>{state}</Text>

        </View>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen
