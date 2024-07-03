import { SetStateAction, useRef, useState } from 'react'
import {
  Alert,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native'
import BatLogo from '../../assets/batsignal-logo.png'
import { styles } from './BatFormStyles'

export default function BatForm({
  activate,
}: {
  activate: React.Dispatch<SetStateAction<boolean>>
}) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('')
  const [observation, setObservation] = useState('')
  const ref_phoneInput = useRef<TextInput>(null)

  const handleSendInfo = () => {
    Alert.alert(
      `Thank you ${name}!`,
      'Your message has been sent. Look up for the bat!'
    )
    activate(false)
  }

  const isSendDisabled = () => {
    return !name.length ||
      !phone.length ||
      !location.length ||
      !observation.length
      ? true
      : false
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={BatLogo} style={{ width: 120, height: 120 }} />
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.lineInput}
            placeholder="Your name"
            keyboardType="name-phone-pad"
            returnKeyType="next"
            autoFocus
            onEndEditing={() => ref_phoneInput.current?.focus()}
            onChangeText={setName}
            value={name}
          ></TextInput>
          <Text style={styles.inputLabel}>Your Phone</Text>
          <TextInput
            style={styles.lineInput}
            placeholder="Phone number"
            keyboardType="numeric"
            onChangeText={setPhone}
            value={phone}
            ref={ref_phoneInput}
          ></TextInput>
          <Text style={styles.inputHint}>Use the format xx xxxx-xxxx</Text>
          <Text style={styles.inputLabel}>Where is your location?</Text>
          <TextInput
            style={styles.areaInput}
            multiline
            placeholder="Your location here..."
            keyboardType="default"
            onChangeText={setLocation}
            value={location}
          />
          <Text style={styles.inputLabel}>What happened?</Text>
          <TextInput
            style={styles.areaInput}
            multiline
            placeholder="Tell me what happened..."
            keyboardType="default"
            onChangeText={setObservation}
            value={observation}
          />
          <Text style={styles.inputHint}>
            You don't need to be very specific
          </Text>
          <Pressable
            style={
              isSendDisabled()
                ? [styles.helpBtn, styles.helpBtnDisabled]
                : styles.helpBtn
            }
            onPress={handleSendInfo}
            disabled={isSendDisabled()}
          >
            <Text style={styles.helpBtnText}>Send</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
