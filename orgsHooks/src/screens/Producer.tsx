import {useRoute} from '@react-navigation/native'
import {FlatList, Image, StyleSheet, Text, View} from 'react-native'
import useProducer from '../hooks/useProducer'
import Top from '../components/Top'
import useTexts from '../hooks/useTexts'
import {TextsType} from '../types/producers'
import topImage from '../assets/producers/topprod.png'
import CustomText from '../components/CustomText'
import Basket from '../components/Basket/Basket'

const Producer = () => {
  const route = useRoute()
  const producer = useProducer(route.params?.name)
  const texts: TextsType = useTexts()

  const ListHeader = () => {
    return (
      <>
        <Top title={texts.titleProducer} image={topImage} height={156} />
        <View style={styles.content}>
          <View style={styles.logo}>
            <Image source={producer?.image} style={styles.producerImage} />
            <CustomText style={styles.producer}>{producer?.name}</CustomText>
          </View>

          <CustomText style={styles.baskets}>{texts.titleBaskets}</CustomText>
        </View>
      </>
    )
  }

  if (!producer) return <Text>Loading producer information...</Text>

  return (
    <FlatList
      data={producer.baskets}
      style={styles.list}
      renderItem={({item}) => (
        <Basket details={item.details} producer={producer} />
      )}
      ListHeaderComponent={ListHeader}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
  },
  content: {
    paddingHorizontal: 16,
  },
  logo: {
    flexDirection: 'row',
  },
  producerImage: {
    width: 62,
    height: 62,
    marginTop: -23,
    borderRadius: 6,
  },
  producer: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  baskets: {
    color: '#464646',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
    marginTop: 32,
  },
})

export default Producer
