import { SafeAreaView, Text, View } from 'react-native'

export default function Flex() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>Flex</Text>
      </View>
    </SafeAreaView>
  )
}
