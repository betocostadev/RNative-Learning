import {FlatList, StyleSheet, View} from 'react-native'
import {IProducer, TextsType} from '../types/producers'
import CustomText from '../components/CustomText'
import Top from '../components/Top'
import Details from '../components/Basket/Details'
import Item from '../components/Basket/Item'
import useTexts from '../hooks/useTexts'

const Basket = ({producer}: {producer: IProducer}) => {
  const baskets = producer.baskets
  const details = baskets[0].details
  const items = baskets[0].items
  const texts: TextsType = useTexts()

  return (
    <>
      <FlatList
        data={items}
        renderItem={item => (
          <Item name={item.item.name} image={item.item.image} />
        )}
        keyExtractor={({name}) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <Top title={texts.topBasket} />
              <View style={styles.basket}>
                <Details
                  name={details.name}
                  producer={producer}
                  description={details.description}
                  price={details.price}
                />
                <CustomText style={styles.title}>{texts.titleItems}</CustomText>
              </View>
            </>
          )
        }}
        style={styles.list}
      />
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
  },
  title: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})

export default Basket
