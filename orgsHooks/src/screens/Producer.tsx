import {useRoute} from '@react-navigation/native'
import {Text, View} from 'react-native'
import useProducer from '../hooks/useProducer'

const Producer = () => {
  const route = useRoute()
  const producer = useProducer(route.params?.name)
  console.log(producer)

  if (!producer) return <Text>Loading producer information...</Text>
  return (
    <View>
      <Text>{producer.name}</Text>
    </View>
  )
}

export default Producer
