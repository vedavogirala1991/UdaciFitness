import React,{Component} from 'react'
import { View,Text } from 'react-native'

const DateHeader = ({date}) => {
  console.log('inside DateHeader', date)
  return (
      <Text>
        {date}
      </Text>
  )
}

export default DateHeader
