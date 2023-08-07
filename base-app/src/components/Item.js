import { Image, StyleSheet, View } from 'react-native'
import CustomText from './CustomText'

const Item = ({ item: { name, image } }) => {
  return (
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
      <CustomText style={styles.itemName}>{name}</CustomText>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    padding: 16,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46,
  },
  itemName: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 11,
    color: '#464646',
  },
})

export default Item
