import { StatusBar } from 'expo-status-bar'
import { useEffect, useRef, useState, useReducer } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
  // Not reactive
  // let quantity: number = 12

  // const decreaseNumber = async () => {
  //   quantity = quantity - 1
  //   console.log(quantity)
  // }

  // const increaseNumber = async () => {
  //   quantity = quantity + 1
  //   console.log(quantity)
  // }

  // Reactive
  const [quantity, setQuantity] = useState<number>(1)
  const [price, setPrice] = useState<number>(10.9)
  const [total, setTotal] = useState<number>(0)
  const [inputValue, setInputValue] = useState<string>('')

  // Use Reducer
  const ActionTypes = {
    RESET: 'RESET',
    WRITE: 'WRITE',
  }

  const reducer = (state: any, action: { type: string }) => {
    switch (action.type) {
      case ActionTypes.RESET:
        state.textInputRef2.current?.focus()
        state.textInputRef2.current?.setNativeProps({ text: '' })
        return state

      case ActionTypes.WRITE:
        state.textInputRef2.current?.focus()
        state.textInputRef2.current?.setNativeProps({ text: 'Beto' })
        return state

      default:
        return state
    }
  }

  const initialState = {
    textInputRef2: useRef<TextInput>(null),
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  // Handlers

  const decreaseNumber = (): void => {
    setQuantity((prev) => prev - 1)
  }
  const increaseNumber = (): void => {
    setQuantity((prev) => prev + 1)
  }

  const decreasePriceByCents = (): void => {
    setPrice((prev) => prev - 0.1)
  }
  const increasePriceByCents = (): void => {
    setPrice((prev) => prev + 0.1)
  }

  const decreasePriceByDolar = (): void => {
    setPrice((prev) => prev - 1.0)
  }
  const increasePriceByDolar = (): void => {
    setPrice((prev) => prev + 1.0)
  }

  const handlePriceChange = () => {
    setTotal(() => quantity * price)
  }

  // Ref
  const textInputRef = useRef<TextInput>(null)

  const handleReset = () => {
    textInputRef.current?.focus()
    textInputRef.current?.setNativeProps({ text: '' })
    setInputValue(() => '')
  }

  useEffect(() => {
    handlePriceChange()
  }, [quantity, price])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hookinator</Text>
      <View style={styles.sectionBorder}>
        <Text>Using simple variables without State</Text>
        <Text>It was removed to be used with the State Hook.</Text>
        <Text>It's available in the App code.</Text>
      </View>
      <Text style={[styles.heading, { fontSize: 24 }]}>Reactive States</Text>
      <Text style={styles.heading}>Quantity</Text>
      <View style={styles.buttonRow}>
        <Button title="➖" onPress={decreaseNumber} />
        <Text style={styles.textLabel}>{quantity}</Text>
        <Button title="➕" onPress={increaseNumber} />
      </View>
      <Text style={styles.heading}>Price</Text>
      <View style={styles.buttonRow}>
        <View>
          <Button title="➖" onPress={decreasePriceByCents} />
          <Button title="➖➖" onPress={decreasePriceByDolar} />
        </View>
        <Text style={[styles.textLabel, { alignSelf: 'center' }]}>
          {price.toFixed(2)}
        </Text>
        <View>
          <Button title="➕" onPress={increasePriceByCents} />
          <Button title="➕➕" onPress={increasePriceByDolar} />
        </View>
      </View>
      <Text style={styles.heading}>Total Price</Text>
      <Text style={styles.textLabel}>{total.toFixed(2)}</Text>
      <View>
        <TextInput
          style={styles.textInput}
          value={inputValue}
          onChangeText={setInputValue}
          ref={textInputRef}
        ></TextInput>
        <Button title="Reset" onPress={handleReset} />
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          ref={state.textInputRef2}
        ></TextInput>
        <Button title="Reset" onPress={() => dispatch({ type: 'RESET' })} />
        <Button title="Name" onPress={() => dispatch({ type: 'WRITE' })} />
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
  sectionBorder: {
    marginBottom: 12,
    borderBottomWidth: 5,
    borderStartStartRadius: 2,
    borderEndStartRadius: 10,
    borderStartEndRadius: 2,
    borderEndEndRadius: 10,
    borderColor: '#454545',
  },
  textLabel: {
    fontSize: 22,
    marginHorizontal: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    padding: 12,
  },
  heading: {
    marginVertical: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    marginVertical: 8,
    fontSize: 26,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    borderColor: '#575757',
    borderWidth: 2,
    marginVertical: 14,
    paddingHorizontal: 10,
  },
})
