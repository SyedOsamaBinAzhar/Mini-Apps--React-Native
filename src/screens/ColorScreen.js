import React,{ useState } from 'react'
import { View,StyleSheet,Text,Button,FlatList } from 'react-native'


const ColorScreen = () => {
    const [colors,setColor] = useState([])
    return (
        <View>
         <Button title="Add Color"
         onPress = {() => {
            setColor([...colors,randomRGB()])
         }}
         /> 
         
         <FlatList
         keyExtractor={ (item) => item}
         data = {colors}
         renderItem={({item}) => {
             return <View style={{height:100, width:100, backgroundColor: item}}/>  
         } }
         
         />
        </View>
    )
}

const randomRGB = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    
    return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({})

export default ColorScreen
