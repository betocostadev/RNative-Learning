import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import { registerForPushNotificationsAsync } from '../../utils/registerForPushNotificationsAsync'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { theme } from '../../theme/theme'
import { useEffect, useState } from 'react'
import { Duration, intervalToDuration, isBefore } from 'date-fns'
import { TimeSegment } from '../../components/TimeSegment'

type CountdownStatus = {
  isOverdue: boolean
  distance: Duration
}

// 10 seconds from now
const timestamp = Date.now() + 10 * 1000

export default function CounterScreen() {
  const [status, setStatus] = useState<CountdownStatus>({
    isOverdue: false,
    distance: {},
  })

  console.log(status)

  useEffect(() => {
    const intervalId = setInterval(() => {
      const isOverdue = isBefore(timestamp, Date.now())
      const distance = intervalToDuration(
        isOverdue
          ? { start: timestamp, end: Date.now() }
          : { start: Date.now(), end: timestamp }
      )
      setStatus({ isOverdue, distance })
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const scheduleNotification = async () => {
    const result = await registerForPushNotificationsAsync()
    if (result === 'granted') {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: "You've got a new task! 📬",
          body: 'Here is the notification body',
          data: { data: 'goes here', test: { test1: 'more data' } },
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: 5,
        },
      })
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
    <View
      style={[
        styles.container,
        status.isOverdue ? styles.containerLate : undefined,
      ]}
    >
      {status.isOverdue ? (
        <Text
          style={[
            styles.statusText,
            status.isOverdue ? styles.whiteText : undefined,
          ]}
        >
          Task overdue by:
        </Text>
      ) : (
        <Text
          style={[
            styles.statusText,
            status.isOverdue ? styles.whiteText : undefined,
          ]}
        >
          Task due in:
        </Text>
      )}
      <View style={styles.timer}>
        <TimeSegment
          textStyle={status.isOverdue ? styles.whiteText : undefined}
          unit="Days"
          number={status.distance.days ?? 0}
        />
        <TimeSegment
          textStyle={status.isOverdue ? styles.whiteText : undefined}
          unit="Hours"
          number={status.distance.hours ?? 0}
        />
        <TimeSegment
          textStyle={status.isOverdue ? styles.whiteText : undefined}
          unit="Minutes"
          number={status.distance.minutes ?? 0}
        />
        <TimeSegment
          textStyle={status.isOverdue ? styles.whiteText : undefined}
          unit="Seconds"
          number={status.distance.seconds ?? 0}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={scheduleNotification}
      >
        {/* <Text style={styles.buttonText}>Request Permission</Text> */}
        <Text style={styles.buttonText}>Complete task!</Text>
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
  containerLate: {
    backgroundColor: theme.colors.red,
  },
  whiteText: {
    color: theme.colors.white,
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
    fontSize: theme.fontSize.XL,
  },
  statusText: {
    fontSize: theme.fontSize.XL,
    marginBottom: 24,
  },
  timer: {
    flexDirection: 'row',
    marginVertical: 12,
    paddingBottom: 10,
  },
})
