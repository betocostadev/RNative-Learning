import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../../theme/theme'

export default function CounterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  text: {
    fontSize: 24,
  },
})
