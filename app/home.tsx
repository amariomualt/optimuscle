import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {router} from 'expo-router';

const home = () => {
  return (
    <View>
      <Pressable onPress={() => router.push("/register")}>
        <Text>Get Started</Text>
      </Pressable>
    </View>
  )
}

export default home