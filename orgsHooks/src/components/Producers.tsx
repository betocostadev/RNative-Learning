import {useEffect, useState} from 'react'
import {FlatList, StyleSheet, Text} from 'react-native'
import {getProducers} from '../services/gen-data'

const Producers = ({header: Header}: {header: any}) => {
  const [title, setTitle] = useState('')
  const [producers, setProducers] = useState([])

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
        setProducers(data.list as never)
        console.log(producers)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (!producers) return <Text style={styles.title}>Loading...</Text>

  return (
    <FlatList
      data={producers}
      renderItem={({item: {name}}) => <Text>{name}</Text>}
      keyExtractor={({name}) => `producer-${name}`}
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
