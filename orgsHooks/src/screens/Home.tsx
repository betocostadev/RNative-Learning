import {FlatList, StyleSheet} from 'react-native'
import TopHome from '../components/Home/Top'
import useProducers from '../hooks/useProducers'
import useTexts from '../hooks/useTexts'
import CustomText from '../components/CustomText'
import Producer from '../components/Home/Producer'

const Home = ({bestProducers}) => {
  const list = useProducers(bestProducers)
  const {titleProducers} = useTexts()
  console.log(list)

  const ListTop = () => {
    return (
      <>
        <TopHome bestProducers={bestProducers} />
        <CustomText style={styles.title}>{titleProducers}</CustomText>
      </>
    )
  }
  return (
    <FlatList
      data={list}
      renderItem={({item}) => <Producer {...item} onPress={() => {}} />}
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
