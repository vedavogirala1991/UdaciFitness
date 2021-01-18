import { StatusBar } from 'expo-status-bar'
import React,{Component} from 'react'
import {View,
        Text,
        StyleSheet,
        TouchableHighlight,
        TouchableOpacity,
        TouchableNativeFeedback,
        TouchableWithoutFeedback} from 'react-native'

import AddEntry from './components/AddEntry'

class App extends Component {
  componentDidMount() {
    console.log('Before')
    debugger
    console.log('After')
  }
  render () {
    return (
      <View>
        <AddEntry />
      </View>
    )
  }
}

export default App
