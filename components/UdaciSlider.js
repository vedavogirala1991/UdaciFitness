import React,{Component} from 'react'
import { View, Text, Slider } from 'react-native'

class UdaciSlider extends Component {
  render () {
    return (
      <View>
        <Slider
          step={step}
          value={value}
          maximumValue={max}
          minimumValue={0}
          onValueChange={onChange}
        />
        <View>
          <Text>{value}</Text>
          <Text>{unit}</Text>
        </View>
        
      </View>
    )
  }
}

export default UdaciSlider
