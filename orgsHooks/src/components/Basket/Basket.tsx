import React from 'react'
import {useNavigation} from '@react-navigation/core'

import {StyleSheet, View, Image, TouchableOpacity} from 'react-native'
import CustomText from '../CustomText'
import {BasketTypeDetails} from '../../types/producers'

const Basket = ({details}: {details: BasketTypeDetails}) => {
  const navigation = useNavigation()
  const {name, image, description, price} = details

  return (
    <TouchableOpacity style={styles.basket} onPress={() => {}}>
      <View style={styles.content}>
        <Image source={image} style={styles.image} />

        <View style={styles.texts}>
          <CustomText style={styles.name}>{name}</CustomText>
          <CustomText style={styles.description}>{description}</CustomText>
          <CustomText style={styles.price}>{price}</CustomText>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  basket: {
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
  },
  image: {
    width: 62,
    height: 62,
    borderRadius: 6,
  },
  texts: {
    flex: 1,
    marginLeft: 8,
  },
  name: {
    color: '#464646',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  description: {
    color: '#A3A3A3',
    fontSize: 14,
    lineHeight: 22,
  },
  price: {
    color: '#2A9F85',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    marginTop: 4,
  },
})

export default Basket
