import {FlatList, StyleSheet, View} from 'react-native'
import {IProducer, TextsType} from '../types/producers'
import CustomText from '../components/CustomText'
import Top from '../components/Top'
import Details from '../components/Basket/Details'
import Item from '../components/Basket/Item'
import useTexts from '../hooks/useTexts'

const Basket = ({producer}: {producer: IProducer}) => {
  const texts: TextsType = useTexts()

  return (
    <>
      <FlatList
        data={producer.baskets}
        renderItem={item => <Item name={} image={item.item.image} />}
        keyExtractor={({name}) => name}
        ListHeaderComponent={() => {
          return (
            <>
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
