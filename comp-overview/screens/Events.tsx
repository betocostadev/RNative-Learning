import { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import { sumNumbersArr } from '../utils/mathFunctions'

export default function Events() {
  const handleTextPress = () => {
    return Alert.alert('Handler Function pressed')
  }

  const handleTextPressWithParams = (text: string) => {
    return Alert.alert(`You pressed ${text}`)
  }

  const [numbers, setNumbers] = useState([0, 0, 0])

  const [sumResult, setSumResult] = useState(0)

  const getSum = () => {
    if (numbers.some((num) => isNaN(num))) {
      return 'Please input valid numbers'
    }
    setSumResult(sumNumbersArr(numbers))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Handling Events</Text>
      <View style={styles.textContainer}>
        <Text
          style={styles.textHandler}
          onPressIn={() => console.log('1. Press in')}
          onPress={() => Alert.alert('Check the console')}
          onPressOut={() => console.log('3. Press out')}
        >
          Inline
        </Text>
        <Text style={styles.textHandler} onPress={handleTextPress}>
          Handler Function
        </Text>
        <Text
          style={styles.textHandler}
          onPress={() => handleTextPressWithParams('Hello!')}
        >
          Handler Function with params
        </Text>
        <Text style={[styles.textHandler, { color: '#000' }]}>
          Calculate using an external module
        </Text>

        <View style={styles.mathInputsContainer}>
          <TextInput
            style={styles.mathInputs}
            placeholder="Set number 1"
            keyboardType="numeric"
            value={numbers[0].toString()}
            onChangeText={(text) =>
              !text
                ? setNumbers([0, numbers[1], numbers[2]])
                : setNumbers([parseInt(text), numbers[1], numbers[2]])
            }
          />
          <Text>+</Text>
          <TextInput
            style={styles.mathInputs}
            placeholder="Set number 2"
            keyboardType="numeric"
            value={numbers[1].toString()}
            onChangeText={(text) =>
              !text
                ? setNumbers([numbers[0], 0, numbers[2]])
                : setNumbers([numbers[0], parseInt(text), numbers[2]])
            }
          />
          <Text>+</Text>
          <TextInput
            style={styles.mathInputs}
            placeholder="Set number 3"
            keyboardType="numeric"
            value={numbers[2].toString()}
            onChangeText={(text) =>
              !text
                ? setNumbers([numbers[0], numbers[1], 0])
                : setNumbers([numbers[0], numbers[1], parseInt(text)])
            }
          />
        </View>
        <Text style={styles.textHandler} onTextLayout={getSum}>
          Sum is: {sumResult}
        </Text>
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: {
    margin: 10,
  },
  textHandler: {
    fontSize: 16,
    padding: 4,
    color: '#1d77ff',
  },
  mathInputsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  mathInputs: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#cecece',
    padding: 8,
    margin: 5,
  },
})
