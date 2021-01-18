import { StatusBar } from 'expo-status-bar'
import React,{Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Ionicons} from '@expo/vector-icons'

class App extends Component {
  componentDidMount() {
    console.log('Before')
    debugger
    console.log('After')
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>Hello World!!</Text>
        <Ionicons name='ios-pizza' color='red' size={100}/>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default App
