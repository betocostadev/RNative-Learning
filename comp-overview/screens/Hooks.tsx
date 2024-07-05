import { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Hooks() {
  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container} accessibilityLabel="article">
      <Text style={styles.title}>React Hooks</Text>
      <View>
        <Text>
          <Text style={{ fontWeight: 'bold' }}>useState</Text> - The Most basic
          and used hook
        </Text>

        <Text style={styles.counter}>Counter: {counter}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Button
            title="Increase Counter"
            onPress={() => setCounter(counter + 1)}
          />
          <Button
            title="Decrease Counter"
            onPress={() => setCounter(counter - 1)}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
  counter: { fontSize: 16, alignSelf: 'center', margin: 10 },
})
