import { StatusBar } from 'expo-status-bar'
import { useLayoutEffect } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function App() {
  let quantity: number = 12

  const decreaseNumber = async () => {
    quantity = quantity - 1
    console.log(quantity)
  }

  const increaseNumber = async () => {
    quantity = quantity + 1
    console.log(quantity)
  }

  return (
    <View style={styles.container}>
      <Text>Using simple variables withou State</Text>
      <View style={styles.buttonRow}>
        <Button title="➖" onPress={decreaseNumber} />
        <Text style={styles.textLabel}>{quantity}</Text>
        <Button title="➕" onPress={increaseNumber} />
      </View>
      <StatusBar style="auto" />
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
  textLabel: {
    fontSize: 22,
    marginHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    padding: 12,
  },
})
