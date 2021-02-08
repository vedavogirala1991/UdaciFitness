import React,{Component} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'
import {getMetricMetaInfo, timeToString} from '../utils/helpers'
import {submitEntry,removeEntry} from '../utils/api'
import UdaciSlider from './UdaciSlider'
import UdaciStepper from './UdaciStepper'
import DateHeader from './DateHeader'
import TextButton from './TextButton'
import { Ionicons } from '@expo/vector-icons'

const SubmitBtn = ({onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}>
      <Text>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class AddEntry extends Component {
  state = {
    run :0,
    bike:0,
    swim:0,
    sleep:0,
    eat:0,
  }
  increment = (metric) => {
    const {max,step} = getMetricMetaInfo(metric)

    this.setState((state)=>{
      const count = state[metric] + step

      return {
        ...state,
        [metric] : count > max ? max : count,
      }
    })
  }

  decrement = (metric) => {
    const {step} = getMetricMetaInfo(metric)

    this.setState((state)=>{
      const count = state[metric] - step

      return {
        ...state,
        [metric] : count < 0 ? 0 : count,
      }
    })
  }

  slide = (metric,value) => {
    this.setState((state)=>{
      return {
        ...state,
        [metric] : value,
      }
    })
  }

  submit = () => {
    const key = timeToString()
    const entry = this.state

    // Update Redux


    //Navigate to home

    submitEntry({key,entry})

    //Clear local notification
  }

  reset = () => {
    const key = timeToString()

    //Update Redux

    this.setState(()=>({
      run :0,
      bike:0,
      swim:0,
      sleep:0,
      eat:0,
    }))

    //Route to home

    removeEntry(key)
  }

  render () {
    const metaInfo = getMetricMetaInfo()

    if(this.props.alreadyLogged) {
      return (
        <View>
          <Ionicons
            name='ios-happy-outline'
            size={100}/>
          <Text>You already logged your information for today</Text>
          <TextButton onPress={this.reset}>
            Reset
          </TextButton>
        </View>
      )
    }

    return (
      <View>
        <DateHeader date={(new Date()).toLocaleDateString()} />
        {Object.keys(metaInfo).map((key)=>{
          const {getIcon,type,...rest} = metaInfo[key]
          const value = this.state[key]

          return (
            <View key={key}>
              {getIcon()}
              {type==='slider'
                ? <UdaciSlider
                    value={value}
                    onChange={(value)=>this.slide(key,value)}
                    {...rest}/>
                : <UdaciStepper
                    value={value}
                    onIncrement={()=>this.increment(key)}
                    onDecrement={()=>this.decrement(key)}
                    {...rest}/>
              }
            </View>
          )
        })}
        <SubmitBtn/>
      </View>
    )
  }
}

export default AddEntry
