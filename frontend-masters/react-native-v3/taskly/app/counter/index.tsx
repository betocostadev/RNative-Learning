import * as Device from 'expo-device'
import * as Notifications from 'expo-notifications'
import { registerForPushNotificationsAsync } from '../../utils/registerForPushNotificationsAsync'
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native'
import { theme } from '../../theme/theme'
import { useEffect, useRef, useState } from 'react'
import { intervalToDuration, isBefore } from 'date-fns'
import { TimeSegment } from '../../components/TimeSegment'
import { ONE_SECOND_MS } from '../../utils/constants'
import { getFromStorage, setInStorage } from '../../utils/storage'
import { EStorageKeys } from '../../types/general'
import { CountdownStatus, PersistedCountdownState } from '../../types/countdown'
import * as Haptics from 'expo-haptics'
import ConfettiCannon from 'react-native-confetti-cannon'
import Explosion from 'react-native-confetti-cannon'

const frequency = ONE_SECOND_MS * 30

export default function CounterScreen() {
  const [initializing, setInitializing] = useState(true)
  const [countdownState, setCountdownState] = useState<
    PersistedCountdownState | undefined
  >(undefined)
  const [status, setStatus] = useState<CountdownStatus>({
    isOverdue: false,
    distance: {},
  })
  const lastCompletedTimestamp = countdownState?.completedAtTimestamps[0]
  const confettiRef = useRef<Explosion>(null)
  const { width, height } = useWindowDimensions()

  useEffect(() => {
    const init = async () => {
      const value = await getFromStorage(EStorageKeys.countdown)
      setCountdownState(value)
    }
    init()
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const timestamp = lastCompletedTimestamp
        ? lastCompletedTimestamp + frequency
        : Date.now()
      if (initializing) {
        setInitializing(false)
      }
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
  }, [lastCompletedTimestamp])

  const scheduleNotification = async () => {
    confettiRef.current?.start()
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
    let pushNotificationId
    const result = await registerForPushNotificationsAsync()
    if (result === 'granted') {
      pushNotificationId = await Notifications.scheduleNotificationAsync({
        content: {
          title: "You've got a new task! 📬",
          body: 'Time to work on it',
          data: { data: 'Any data?', test: { test1: 'test data' } },
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
          seconds: frequency / 1000,
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

    if (countdownState?.currentNotificationId) {
      await Notifications.cancelScheduledNotificationAsync(
        countdownState.currentNotificationId
      )
    }

    const newCountdownState: PersistedCountdownState = {
      currentNotificationId: pushNotificationId,
      completedAtTimestamps: countdownState
        ? [Date.now(), ...countdownState.completedAtTimestamps]
        : [Date.now()],
    }

    setCountdownState(newCountdownState)

    await setInStorage(EStorageKeys.countdown, newCountdownState)
  }

  if (initializing) {
    return <ActivityIndicator style={styles.activityIndicatorContainer} />
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
      <ConfettiCannon
        ref={confettiRef}
        count={50}
        origin={{
          x: width / 2,
          y: height - height - 20,
        }}
        fadeOut
        autoStart={false}
      />
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
  activityIndicatorContainer: {
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
