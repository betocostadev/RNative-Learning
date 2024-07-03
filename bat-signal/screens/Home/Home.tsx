import { Image, Pressable, Text, View } from 'react-native'
import BatLogo from '../../assets/batsignal-logo.png'
import { styles } from './HomeStyles'
import { useState } from 'react'
import BatForm from '../../components/BatForm/BatForm'

export default function Home() {
  const [formActive, setFormActive] = useState(false)

  const handlePress = () => {
    setFormActive(!formActive)
  }

  return (
    <View style={styles.container}>
      {!formActive ? (
        <View style={styles.mainContainer}>
          <Image
            source={BatLogo}
            style={{ width: 250, height: 250, marginBottom: 40 }}
          />

          <Pressable style={styles.activateButton} onPress={handlePress}>
            <Text style={{ fontSize: 20, color: '#fff' }}>
              Activate Bat Signal
            </Text>
          </Pressable>
        </View>
      ) : (
        <BatForm activate={setFormActive} />
      )}
    </View>
  )
}
