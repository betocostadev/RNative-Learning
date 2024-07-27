import { useState, useContext } from 'react'
import { Text, View, TextInput, StyleSheet, Button } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamlist } from '../../routes/stack.routes'
import { UserContext, UserContextProps } from '../contexts/UserContext'

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamlist, 'Home'>
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [inputValue, setInputValue] = useState<string>('')

  const { contextName, saveContextName } = useContext<UserContextProps>(
    UserContext as React.Context<UserContextProps>
  )

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
      <TextInput
        style={styles.textInput}
        placeholder="Set context name..."
        value={contextName}
        onChangeText={(t) => saveContextName(t)}
      />
      <Button title="Log in" onPress={goToUserScreen} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginVertical: 10,
  },
  textInput: {
    margin: 6,
    padding: 6,
    borderWidth: 2,
    borderColor: '#b5b5b5',
    width: '80%',
  },
})
