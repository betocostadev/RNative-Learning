import {useEffect, useState} from 'react'
import {FlatList, StyleSheet, Text} from 'react-native'
import {getProducers} from '../services/gen-data'
import {IProducer, TypeProducers} from '../types/producers'
import Producer from './Producer'

// type ProducersList = Omit<TypeProducers, 'title'>[]

const Producers = ({header: Header}: {header: any}) => {
  const [title, setTitle] = useState('')
  const [producers, setProducers] = useState<IProducer[]>([])

  const getHeader = () => {
    return (
      <>
        <Header />
        <Text style={styles.title}>{title}</Text>
      </>
    )
  }

  const getData = async () => {
    try {
      const data = getProducers()
      if (data) {
        setTitle(data.title)
        setProducers(data.list as IProducer[])
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [producers])

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
