import { Pressable, Text, View } from 'react-native'
import { styles } from './BatButtonStyles'
import BatTextInput from '../BatTextInput/BatTextInput'
import { useState } from 'react'
import * as Clipboard from 'expo-clipboard'
import generatePassword from '../../utils/generatePassword'
import Toast from 'react-native-toast-message'

export default function BatButton() {
  const [pass, setPass] = useState('')
  const [passLength, setPassLength] = useState(8)

  const handleGeneratePass = () => {
    setPass(generatePassword(passLength))
  }

  const handlePassLenght = (action: string) => {
    if (passLength === 3 && action === '-') {
      Toast.show({
        type: 'info',
        text1: 'Error',
        text2: 'Password length cannot be less than 3',
        position: 'bottom',
        bottomOffset: 50,
      })
      return
    }
    if (action === '+') {
      setPassLength(passLength + 1)
    } else {
      setPassLength(passLength - 1)
    }
  }

  const handleCopyPass = async () => {
    // Copy pass to clipboard
    try {
      await Clipboard.setStringAsync(pass)
      // const text = await Clipboard.getStringAsync()
      // Alert user that pass has been copied
      showToast(true)
    } catch (error) {
      showToast(false)
    }
  }

  const showToast = (status: boolean) => {
    Toast.show({
      type: status ? 'success' : 'error',
      text1: status ? 'Password copied' : 'Failed to copy password',
      text2: pass,
      position: 'bottom',
      bottomOffset: 50,
    })
  }

  return (
    <>
      <BatTextInput pass={pass} />

      <View style={styles.sizeContainer}>
        <Pressable
          style={styles.miniButton}
          onPress={() => handlePassLenght('-')}
        >
          <Text style={styles.text}>-</Text>
        </Pressable>

        <Text style={styles.text}>Password Size</Text>
        <Pressable
          style={styles.miniButton}
          onPress={() => handlePassLenght('+')}
        >
          <Text style={styles.text}>+</Text>
        </Pressable>
      </View>
      <Pressable style={styles.button} onPress={handleGeneratePass}>
        <Text style={styles.text}>💥 GENERATE</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handleCopyPass}>
        <Text style={styles.text}>⚡️ COPY</Text>
      </Pressable>
    </>
  )
}
