import React from 'react'
import {
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
} from 'react-native'

import Gradient from '../assets/gradient.svg'
import BackSVG from '../assets/back.svg'
import topImage from '../assets/top.png'
import CustomText from './CustomText'
import {useNavigation} from '@react-navigation/native'

const deviceWidth = Dimensions.get('screen').width
const DEFAULT_HEIGHT = 270

const Top = ({title = '', image = topImage, height = DEFAULT_HEIGHT}) => {
  const styles = funcStyles(height)
  const navigation = useNavigation()

  return (
    <View>
      <Image source={image} style={styles.top} />
      <Gradient
        width={deviceWidth}
        height={(130 / 360) * deviceWidth}
        style={styles.gradient}
      />
      <CustomText style={styles.title}>{title}</CustomText>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack()
        }}
        style={styles.backBtn}>
        <BackSVG color="white" style={styles.back} />
      </TouchableOpacity>
    </View>
  )
}

const funcStyles = (height: number) =>
  StyleSheet.create({
    top: {
      width: '100%',
      height: height,
    },
    gradient: {
      position: 'absolute',
    },
    title: {
      width: '100%',
      position: 'absolute',
      textAlign: 'center',
      fontSize: 16,
      lineHeight: 26,
      color: 'white',
      fontWeight: 'bold',
      padding: 16,
    },
    backBtn: {
      position: 'absolute',
      padding: 17,
    },
    back: {
      width: 24,
      height: 24,
    },
  })

export default Top
