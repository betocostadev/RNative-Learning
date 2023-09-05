import {FlatList, StyleSheet} from 'react-native'
import {TextsType} from '../types/producers'
import TopHome from '../components/Home/TopHome'
import CustomText from '../components/CustomText'
import Producer from '../components/Home/Producer'
import useProducers from '../hooks/useProducers'
import useTexts from '../hooks/useTexts'

const Home = ({bestProducers}: {bestProducers: boolean}) => {
  const list = useProducers(bestProducers)
  const texts: TextsType = useTexts()

  const ListTop = () => {
    return (
      <>
        <TopHome bestProducers={bestProducers} />
        <CustomText style={styles.title}>{texts.titleProducers}</CustomText>
      </>
    )
  }
  return (
    <FlatList
      data={list}
      renderItem={({item}) => (
        <Producer
          {...item}
          // onPress={() => {
          //   console.log('TODO')
          // }}
        />
      )}
      keyExtractor={({name}) => name}
      ListHeaderComponent={ListTop}
      style={styles.list}
    />
  )
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
})

export default Home
