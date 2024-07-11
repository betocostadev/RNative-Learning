import { useEffect, useState, useReducer } from 'react'
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'

interface YearState {
  yearBorn: number
}

type YearAction = { type: 'incrementYear' } | { type: 'decrementYear' }

export default function Hooks() {
  const today = new Date().getFullYear()
  const [counter, setCounter] = useState(0)

  const reducer = (state: YearState, action: YearAction) => {
    switch (action.type) {
      case 'incrementYear':
        return { yearBorn: state.yearBorn + 1 }
      case 'decrementYear':
        return { yearBorn: state.yearBorn - 1 }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, { yearBorn: 1990 })

  const incrementYear = () => dispatch({ type: 'incrementYear' })
  const decrementYear = () => dispatch({ type: 'decrementYear' })

  const showYearBornMessage = () => {
    if (state.yearBorn === 1990) {
      return
    } else if (state.yearBorn === 2000) {
      Alert.alert('You are very young')
    } else if (state.yearBorn === 1992) {
      Alert.alert('You are young')
    }
  }

  useEffect(() => {
    showYearBornMessage()
  }, [state.yearBorn])

  const incrementCounter = () => setCounter((prevState) => prevState + 1)
  const decrementCounter = () => setCounter((prevState) => prevState - 1)

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.container} accessibilityLabel="article">
          <Text style={styles.title}>React Hooks</Text>
          <View style={{ margin: 8 }}>
            <Text style={{ fontSize: 16 }}>
              <Text style={{ fontWeight: 'bold' }}>useState</Text> - The Most
              basic and used hook
            </Text>

            <Text style={styles.counter}>Counter: {counter}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Button title="Decrease Counter ➖" onPress={decrementCounter} />
              <Button title="Increase Counter ➕" onPress={incrementCounter} />
            </View>
          </View>
          <View
            style={{
              borderTopWidth: 1,
              borderColor: '#ccc',
              margin: 8,
              marginTop: 12,
            }}
          >
            <Text style={{ fontSize: 16, marginVertical: 12 }}>
              <Text style={{ fontWeight: 'bold' }}>useReducer</Text> - Similar
              to useState, but used for more complex states
            </Text>
            <Text style={{ fontSize: 16 }}>
              How many years ago were you born?
            </Text>

            <Text style={styles.counter}>
              Set the Year you were born: {state.yearBorn}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Button title="Decrease Year ➖" onPress={decrementYear} />
              <Button title="Increase Year ➕" onPress={incrementYear} />
            </View>
            <Text style={styles.counter}>
              You should have {today - state.yearBorn} years old.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
