import React,{Component} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

const TextButton = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{children}</Text>
    </TouchableOpacity>
  )
}

export default TextButton
