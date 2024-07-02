import { StatusBar } from 'expo-status-bar'
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native'
import { useState } from 'react'
import Logo from '../assets/native.png'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('' as string)
  const [phone, setPhone] = useState('' as string)
  const [phoneFields, setPhoneFields] = useState(false as boolean)

  const logData = (message: string, event: any) => {
    Alert.alert(message)
    console.log('Event:', event)
  }

  const logInformation = () => {
    Alert.alert(
      'Button Pressed',
      `Email: ${email} ${phone ? `Phone: ${phone}` : ''}`
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView>
        <View style={styles.container} accessibilityLabel="article">
          <Text style={styles.title}>Components Overview</Text>
          <Image source={Logo} style={styles.logo} />

          <View style={styles.phoneContainer}>
            <Text>Phone</Text>
            <Switch value={phoneFields} onValueChange={setPhoneFields} />
          </View>

          {phoneFields && (
            <View
              style={{
                width: '100%',
                flex: 1,
                alignItems: 'center',
              }}
            >
              <TextInput
                style={styles.input}
                onChange={(event) => setPhone(event.nativeEvent.text)}
                keyboardType="phone-pad"
                accessibilityLabel="Phone Input"
                placeholder="Enter your phone number"
                returnKeyType="done"
                value={phone}
              />
            </View>
          )}

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
            title={phoneFields ? 'Send information' : 'Send email'}
            onPress={() => logInformation()}
            disabled={
              phoneFields
                ? phone.length < 5 || email.length < 6
                : email.length < 6
            }
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
          <Text style={styles.linksTitle}>Learn more</Text>
          <View style={styles.linksContainer}>
            <Button
              title="Flex"
              onPress={() => navigation.navigate('Flex' as never)}
            />
            <Button
              title="Events"
              onPress={() => navigation.navigate('Events' as never)}
            />
          </View>
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
  phoneContainer: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '60%',
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
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  linksTitle: {
    fontSize: 16,
    margin: 10,
    fontWeight: 'bold',
  },
})
