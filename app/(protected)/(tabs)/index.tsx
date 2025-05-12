import { View, Text, Image } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react'

const index = () => {
  return (
    <View className='flex-1 justify-center items-center'>
      <StatusBar style="light" />
      <Image className="h-full w-full absolute" 
      source={require('../../../assets/images/image.png')} />
    </View>
  )
}

export default index