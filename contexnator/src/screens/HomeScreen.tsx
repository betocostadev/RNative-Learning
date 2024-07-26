import { useState } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamlist } from '../../routes/stack.routes'

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamlist, 'Home'>
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [inputValue, setInputValue] = useState<string>('')

  const goToUserScreen = () => {
    navigation.navigate('User', { username: inputValue })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Write your name..."
        value={inputValue}
        onChangeText={(t) => setInputValue(t)}
      />
      <Button title="Log in" onPress={goToUserScreen} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    alignSelf: 'center',
  },
  textInput: {
    margin: 6,
    padding: 6,
    borderWidth: 2,
    borderColor: '#b5b5b5',
  },
})
