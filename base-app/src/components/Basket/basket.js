import { View } from 'react-native'
import BasketTop from './top'
import styles from './basketStyles'
import BasketDetails from './details'

const Basket = ({ basketData }) => {
  return (
    <View>
      <BasketTop topData={basketData.top} />
      <View style={styles.basket}>
        <BasketDetails details={basketData.details} />
      </View>
    </View>
  )
}

export default Basket
