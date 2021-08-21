import React from 'react'
import { Text , StyleSheet, FlatList } from 'react-native'


const ListScreen = () => {
    const friends = [
        {name : "friend-1", age : "18"},
        {name : "friend-2", age : "20"},
        {name : "friend-3", age : "17"},
        {name : "friend-4", age : "14"},
        {name : "friend-5", age : "1"},
    ]
    return (
        <FlatList
        keyExtractor = {(friend) => friend.name}
        data = {friends}
        renderItem= {({item}) => {return <Text style={styles.textStyle}>{item.name} - Age {item.age}</Text>}}
        />
    )
}

const styles = StyleSheet.create({
    textStyle : {
        marginVertical : 50
    }
})


export default ListScreen
