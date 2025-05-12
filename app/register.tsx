import { View, Text, Pressable} from 'react-native'
import React from 'react'
import {router} from 'expo-router';

const register = () => {
  return (
    <View>
      <Text>register</Text>
      <Pressable onPress={() => router.push("/login")}>
              <Text>Already Have an Account?</Text>
      </Pressable>
    </View>
  )
}

export default register