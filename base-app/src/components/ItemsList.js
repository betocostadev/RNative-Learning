import { FlatList, Image, SafeAreaView, StyleSheet, View } from 'react-native'
import CustomText from './CustomText'

const ItemsList = ({ items, title }) => {
  console.log(items)
  console.log(title)

  const ListItem = ({ item: { name, image } }) => {
    return (
      <View style={styles.item}>
        <Image source={image} style={styles.image} />
        <CustomText style={styles.itemName}>{name}</CustomText>
      </View>
    )
  }
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={
          <CustomText style={styles.title}>{title}</CustomText>
        }
        data={items}
        renderItem={ListItem}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 5,
    fontSize: 20,
    lineHeight: 32,
  },
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
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

export default ItemsList
