import {FlatList, StyleSheet, View} from 'react-native'

import CustomText from '../components/CustomText'
import Top from '../components/Top'
import useTexts from '../hooks/useTexts'

// import Detalhes from './componentes/Detalhes'
// import Item from './componentes/Item'

const Basket = ({details, items, producer}) => {
  const {topBasket, titleItems} = useTexts()

  return (
    <>
      <FlatList
        data={items}
        renderItem={Item}
        keyExtractor={({name}) => name}
        ListHeaderComponent={() => {
          return (
            <>
              <Top title={topBasket} />
              <View style={styles.cesta}>
                <Details {...details} producer={producer} />
                <CustomText style={styles.titulo}>{titleItems}</CustomText>
              </View>
            </>
          )
        }}
        style={styles.lista}
      />
    </>
  )
}

const styles = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})

export default Basket
