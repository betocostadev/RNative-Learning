import { StatusBar } from 'expo-status-bar'
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { useState } from 'react'
import Logo from './assets/native.png'

export default function App() {
  const logData = (message: string, event: any) => {
    Alert.alert(message)
    console.log('Event:', event)
  }

  const logEmailField = () => {
    Alert.alert('Button Pressed', `Email: ${email}`)
  }

  const [email, setEmail] = useState('' as string)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Components Overview</Text>
          <Image source={Logo} style={styles.logo} />

          <TextInput
            style={styles.input}
            onChange={(event) => setEmail(event.nativeEvent.text)}
            keyboardType="email-address"
            accessibilityLabel="Email Input"
            placeholder="Enter your email"
            returnKeyType="done"
            value={email}
          />

          <Button
            title="Send email"
            onPress={() => logEmailField()}
            disabled={email.length < 5}
          />

          <View
            onTouchStart={(event) => {
              logData('On Touch Start', event)
            }}
            onTouchEnd={(event) => {
              logData('On Touch End', event)
            }}
          >
            <Text style={styles.touchableText}>Touchable View</Text>
          </View>
          <Text selectable={true} style={styles.mainText}>
            <Text>A selectable text - </Text>
            <Text>
              It is possible to mark a text as selectable. Also, you can use a
              Text component{' '}
            </Text>
            <Text>
              inside another text component so they are treated as a single
              text.
            </Text>
            <Text>
              It's possible to also use this text as a{' '}
              <Text
                style={styles.boldText}
                onPress={() => console.log('PRESSED!')}
                onLongPress={() => console.log('LONG PRESSED!')}
              >
                pressable
              </Text>
            </Text>
          </Text>
          <StatusBar style="auto" />
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  touchableText: {
    margin: 10,
    padding: 10,
    backgroundColor: 'lightblue',
  },
  mainText: {
    fontSize: 16,
    margin: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 8,
    width: '60%',
  },
  logo: {
    marginTop: 10,
    width: 200,
    height: 200,
    borderWidth: 1,
    borderRadius: 4,
  },
})
