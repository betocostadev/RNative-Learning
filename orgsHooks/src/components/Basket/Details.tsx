import React from 'react'
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native'

import CustomText from '../CustomText'
import useTexts from '../../hooks/useTexts'
import {IProducer, TextsType} from '../../types/producers'

type Props = {
  name: string
  producer: IProducer
  description: string
  price: string
}

const Details = ({name, producer, description, price}: Props) => {
  const texts: TextsType = useTexts()

  return (
    <>
      <CustomText style={styles.name}>{name}</CustomText>
      <View style={styles.farm}>
        <Image source={producer.image} style={styles.imageFarm} />
        <CustomText style={styles.nameFarm}>{producer.name}</CustomText>
      </View>
      <CustomText style={styles.description}>{description}</CustomText>
      <CustomText style={styles.price}>{price}</CustomText>

      <TouchableOpacity style={styles.btn} onPress={() => {}}>
        <CustomText style={styles.textBtn}>{texts.buyBtn}</CustomText>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  name: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  imageFarm: {
    width: 32,
    height: 32,
  },
  nameFarm: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  description: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  btn: {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,
  },
  textBtn: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
  },
})

export default Details
