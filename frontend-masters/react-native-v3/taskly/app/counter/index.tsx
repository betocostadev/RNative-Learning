import * as Device from 'expo-device'
import { registerForPushNotificationsAsync } from '../../utils/registerForPushNotificationsAsync'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../../theme/theme'

export default function CounterScreen() {
  const scheduleNotification = async () => {
    const result = await registerForPushNotificationsAsync()
    if (result === 'granted') {
      // TODO: Handle notifications
      console.log(result)
    } else {
      if (Device.isDevice) {
        Alert.alert(
          'Unable to set notification',
          'Please enable notifications for Expo Go in system settings.'
        )
      }
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={scheduleNotification}
      >
        <Text style={styles.buttonText}>Request Permission</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  button: {
    backgroundColor: theme.colors.black,
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: theme.colors.white,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  text: {
    fontSize: 24,
  },
})
