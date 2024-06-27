import { Pressable, Text } from 'react-native'
import { styles } from './BatButtonStyles'
import BatTextInput from '../BatTextInput/BatTextInput'
import { useState } from 'react'
import * as Clipboard from 'expo-clipboard'
import generatePassword from '../../utils/generatePassword'

export default function BatButton() {
  const [pass, setPass] = useState('')

  const handleGeneratePass = () => {
    setPass(generatePassword())
  }

  const handleCopyPass = async () => {
    // Copy pass to clipboard
    // Alert user that pass has been copied
    await Clipboard.setStringAsync(pass)
    const text = await Clipboard.getStringAsync()
    console.log(text)
  }

  return (
    <>
      <BatTextInput pass={pass} />

      <Pressable style={styles.button} onPress={handleGeneratePass}>
        <Text style={styles.text}>⚡️ GENERATE</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleCopyPass}>
        <Text style={styles.text}>⚡️ COPY</Text>
      </Pressable>
    </>
  )
}
