import { FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { ThemedText } from '@/components/themed-text'
import { ThemedView } from '@/components/themed-view'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'

type ItemData = {
  id: string
  title: string
}

type ItemProps = Pick<ItemData, 'title'>

export default function TestScreen() {
  const [numToAdd, setNumToAdd] = useState('')
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([])

  const generateHundred = () => {
    const nums = []
    for (let index = 1; index <= 100; index++) {
      // console.log('In Loop, index is: ', index)
      nums.push({ id: index, title: index })
    }
    return nums
  }

  const generateRandomNumArray = (size: number) => {
    const nums: number[] = []
    for (let index = 1; index <= size; index++) {
      // Generate random number between 1 and 100
      const randomNum = Math.floor(Math.random() * 100) + 1
      // nums.push({ id: index, title: randomNum })
      if (!nums.find((item: number) => item === randomNum)) {
        nums.push(randomNum)
      }
    }
    nums.sort((a, b) => a - b)
    console.log('Generated 20 random numbers:', nums)
    return nums
  }

  const numberList = generateHundred()
  const randomNumbers = generateRandomNumArray(20)

  const addNumber = () => {
    if (parseInt(numToAdd) <= 60 && selectedNumbers.length < 7) {
      setSelectedNumbers([...selectedNumbers, parseInt(numToAdd)])
      console.log(selectedNumbers)
    }
  }

  useEffect(() => {
    console.log(numberList)
    console.log(randomNumbers)
  }, [numberList, randomNumbers])

  const ItemRow = () => (
    <ThemedView style={{ flexDirection: 'row' }}>
      <ThemedView style={styles.lotteryNumber}>
        <ThemedText>1</ThemedText>
      </ThemedView>
      <ThemedView style={styles.lotteryNumber}>
        <ThemedText>4</ThemedText>
      </ThemedView>
      <ThemedView style={styles.lotteryNumber}>
        <ThemedText>8</ThemedText>
      </ThemedView>
      <ThemedView style={styles.lotteryNumber}>
        <ThemedText>14</ThemedText>
      </ThemedView>
      <ThemedView style={styles.lotteryNumber}>
        <ThemedText>20</ThemedText>
      </ThemedView>
    </ThemedView>
  )

  const Item = ({ title }: ItemProps) => (
    <ThemedView style={styles.item}>
      <ThemedText style={styles.itemTitle}>{title}</ThemedText>
    </ThemedView>
  )

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText style={styles.title}>Lottery ☄️</ThemedText>
        </ThemedView>
        <ThemedView>
          <ThemedText>Choose your numbers</ThemedText>
          <TextInput
            style={{
              padding: 12,
              backgroundColor: 'blue',
              fontSize: 16,
              color: 'white',
            }}
            value={numToAdd}
            onChangeText={setNumToAdd}
            keyboardType="numeric"
          />
          <TouchableOpacity
            style={{ backgroundColor: 'green' }}
            onPress={addNumber}
          >
            <ThemedText style={{ fontSize: 18 }}>Add</ThemedText>
          </TouchableOpacity>
          {selectedNumbers.map((num) => (
            <ThemedText key={num} style={{ fontSize: 12 }}>
              {num.toString()}
            </ThemedText>
          ))}
        </ThemedView>
        <ThemedView>
          <ItemRow />
        </ThemedView>
        <ThemedView>
          <FlatList
            data={numberList}
            renderItem={({ item }) => <Item title={item.title.toString()} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </ThemedView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    gap: 12,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  title: {
    fontSize: 28,
    paddingTop: 18,
  },
  item: {
    backgroundColor: '#476add',
    padding: 28,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 24,
    paddingTop: 10,
    color: 'white',
  },
  lotteryNumber: {
    flex: 1,
    gap: 12,
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 50,
    width: 40,
    height: 60,
    fontSize: 18,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
})
