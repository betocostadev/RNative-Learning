import React from 'react'
import {Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native'

import Gradient from '../assets/gradient.svg'
import topo from '../assets/top.png'
import BackSVG from '../assets/back.svg'
import CustomText from './CustomText'

const largura = Dimensions.get('screen').width
const DEFAULT_HEIGHT = 270

const Top = ({title, imagem = topo, height = DEFAULT_HEIGHT}) => {
  const styles = funcStyles(height)
  return (
    <>
      <Image source={imagem} style={styles.top} />
      <Gradient
        width={largura}
        height={(130 / 360) * largura}
        style={styles.gradient}
      />
      <CustomText style={styles.title}>{title}</CustomText>
      <TouchableOpacity onPress={() => {}} style={styles.backBtn}>
        <BackSVG color="white" style={styles.back} />
      </TouchableOpacity>
    </>
  )
}

const funcStyles = height =>
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
