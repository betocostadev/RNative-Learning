import { View } from 'react-native'
import BasketTop from './top'
import styles from './basketStyles'
import BasketDetails from './details'
import ItemsList from '../ItemsList'

const Basket = ({ basketData }) => {
  return (
    <View>
      <BasketTop topData={basketData.top} />
      <View style={styles.basket}>
        <BasketDetails details={basketData.details} />
        <ItemsList
          items={basketData.items.list}
          title={basketData.items.title}
        />
      </View>
    </View>
  )
}

export default Basket
