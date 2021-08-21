import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {
    var name = "osama"
    return (
        <View>
            <Text style={styles.textStyle}>
                getting started with RN
           </Text>
           <Text style={styles.textStyle}>
                My name is {name}
           </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle : {
        fontSize : 45
    }
})

export default ComponentsScreen
