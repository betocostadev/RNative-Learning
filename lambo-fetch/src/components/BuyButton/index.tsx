import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { AntDesign } from '@expo/vector-icons'

export default function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <AntDesign
          name="shoppingcart"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Text style={styles.buttonLabel}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  )
}
