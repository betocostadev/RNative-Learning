import {FlatList, StyleSheet, Text} from 'react-native'
import Producer from './Producer'
import useProducers from '../hooks/useProducers'

// type ProducersList = Omit<TypeProducers, 'title'>[]

const Producers = ({header: Header}: {header: any}) => {
  const {title, producers} = useProducers()

  const getHeader = () => {
    return (
      <>
        <Header />
        <Text style={styles.title}>{title}</Text>
      </>
    )
  }

  if (!producers) return <Text style={styles.title}>Loading...</Text>

  return (
    <FlatList
      style={{backgroundColor: '#f6f6f6'}}
      data={producers}
      renderItem={({item}) => (
        <Producer
          name={item.name}
          image={item.image}
          distance={item.distance}
          stars={item.stars}
        />
      )}
      keyExtractor={({name}: any) => `producer-${name}`}
      ListHeaderComponent={getHeader()}
    />
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646',
  },
})

export default Producers
