import { Pressable, Text } from 'react-native'
import { styles } from './BatButtonStyles'

export default function BatButton() {
  return (
    <>
      <Pressable style={styles.button} onPress={() => console.log('Pressed')}>
        <Text style={styles.text}>⚡️ GENERATE</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => console.log('Pressed')}>
        <Text style={styles.text}>⚡️ COPY</Text>
      </Pressable>
    </>
  )
}
