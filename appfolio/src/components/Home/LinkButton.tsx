import {
  GestureResponderEvent,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { styles } from './LinkButtonStyles'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign'

export default function LinkButton({
  title,
  background,
  icon,
  fn,
}: {
  title: string
  background: string
  icon: string
  fn: (event: GestureResponderEvent) => void
}) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#fff"
      onPress={fn}
      style={{ marginVertical: 4 }}
    >
      <View style={[styles.linkButtons, { backgroundColor: background }]}>
        <View style={styles.labelContainer}>
          <AntDesign style={styles.icon} name={icon as any} size={24} />
          <Text style={styles.buttonLabel}>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}
