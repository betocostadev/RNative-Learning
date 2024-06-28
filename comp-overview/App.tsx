import { StatusBar } from 'expo-status-bar'
import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import Logo from './assets/native.png'

export default function App() {
  const logData = (message: string, event: any) => {
    Alert.alert(message)
    console.log('Event:', event)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Components Overview</Text>
      <Image source={Logo} style={styles.logo} />
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
          It is possible to mark a text as selectable. Also, you can use a Text
          component{' '}
        </Text>
        <Text>
          inside another text component so they are treated as a single text.
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
  logo: {
    marginTop: 10,
    width: 200,
    height: 200,
    borderWidth: 1,
    borderRadius: 4,
  },
})
