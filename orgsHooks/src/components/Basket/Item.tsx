import React from 'react'
import {View, Image, StyleSheet} from 'react-native'
import {BasketItemType} from '../../types/producers'

import CustomText from '../CustomText'

const Item = ({name, image}: BasketItemType) => {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
      <CustomText style={styles.name}>{name}</CustomText>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46,
  },
  name: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646',
  },
})

export default Item
