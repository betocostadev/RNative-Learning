import { FlatList, View } from 'react-native'
import BasketTop from './top'
import styles from './basketStyles'
import BasketDetails from './details'
import Item from '../Item'
import CustomText from '../CustomText'

const Basket = ({ basketData }) => {
  return (
    <FlatList
      ListHeaderComponent={
        <View>
          <BasketTop topData={basketData.top} />
          <View style={styles.basket}>
            <BasketDetails details={basketData.details} />
            <CustomText style={styles.itemsHeader}>
              {basketData.items.title}
            </CustomText>
          </View>
        </View>
      }
      data={basketData.items.list}
      renderItem={Item}
      keyExtractor={(item) => item.name}
    />
  )
}

export default Basket
