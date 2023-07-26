import { View } from 'react-native'
import BasketTop from './top'
import styles from './basketStyles'
import BasketDetails from './details'

const Basket = () => {
  return (
    <View>
      <BasketTop />
      <View style={styles.basket}>
        <BasketDetails />
      </View>
    </View>
  )
}

export default Basket
