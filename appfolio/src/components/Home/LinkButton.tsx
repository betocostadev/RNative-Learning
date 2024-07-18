import {
  GestureResponderEvent,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { styles } from './LinkButtonStyles'
import React from 'react'

export default function LinkButton({
  title,
  fn,
}: {
  title: string
  fn: (event: GestureResponderEvent) => void
}) {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#b85858"
      onPress={fn}
    >
      <View style={styles.linkButtons}>
        <Text>{title}</Text>
      </View>
    </TouchableHighlight>
  )
}
