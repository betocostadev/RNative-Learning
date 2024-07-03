import { Image, Pressable, Text, TextInput, View } from 'react-native'
import BatLogo from '../../assets/batsignal-logo.png'
import { styles } from './HomeStyles'
import { useState } from 'react'

export default function Home() {
  const [formActive, setFormActive] = useState(false)
  const [name, setName] = useState('')

  return (
    <View style={styles.container}>
      <Image source={BatLogo} style={{ width: 200, height: 200 }} />
      {!formActive ? (
        <Pressable
          style={styles.activateButton}
          onPress={() => setFormActive(!formActive)}
        >
          <Text style={{ fontSize: 20, color: '#fff' }}>
            Activate Bat Signal
          </Text>
        </Pressable>
      ) : (
        <View>
          <TextInput
            placeholder="name"
            onChangeText={setName}
            value={name}
          ></TextInput>
        </View>
      )}
    </View>
  )
}
