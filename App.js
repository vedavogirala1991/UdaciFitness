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
      <View style={styles.container}>
        <AddEntry />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
  }
})


export default App
