import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {IProducer} from '../types/producers'
import Stars from './Stars'
import {useState} from 'react'

const Producer = ({name, image, distance, stars}: IProducer) => {
  const [selected, setSelected] = useState(false)
  const changeSelection = () => setSelected(!selected)

  return (
    <TouchableOpacity style={styles.card} onPress={changeSelection}>
      <Image style={styles.image} source={image} accessibilityLabel={name} />
      <View style={styles.info}>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Stars starsQty={stars} isEditable={selected} isBig={selected} />
        </View>
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ebebeb',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    // iOS Card shadow and elevation
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    // Android only
    elevation: 4,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 8,
    marginVertical: 18,
    marginRight: 16,
  },
  name: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  distance: {
    fontSize: 12,
    lineHeight: 19,
  },
})

export default Producer
