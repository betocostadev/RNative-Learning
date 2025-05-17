import {
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Platform,
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import PlantlyImage from '@/components/PlantyImage'
import { ButtonX } from '@/components/ButtonX'
import { theme } from '@/styles/theme'
import { useState } from 'react'
import { usePlantStore } from '@/store/plantsStore'
import { useRouter } from 'expo-router'
import * as ImagePicker from 'expo-image-picker'

export default function NewScreen() {
  const [name, setName] = useState<string>()
  const [days, setDays] = useState<string>()
  const [imageUri, setImageUri] = useState<string | undefined>(undefined)
  const addPlant = usePlantStore((state) => state.addPlant)
  const router = useRouter()

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert('Validation Error', 'Give your plant a name')
    }

    if (!days) {
      return Alert.alert(
        'Validation Error',
        `How often does ${name} need to be watered?`
      )
    }

    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        'Validation Error',
        'Watering frequency must be a be a number'
      )
    }

    addPlant({ name, wateringFrequencyDays: Number(days), imageUri })
    router.dismissAll()
  }

  const handleChooseImage = async () => {
    if (Platform.OS === 'web') {
      return
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'images',
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    })

    if (!result.canceled) {
      setImageUri(result.assets[0].uri)
    }

    // console.log(JSON.stringify(result, null, ' '))
  }

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity
        style={styles.imageContainer}
        activeOpacity={0.6}
        onPress={handleChooseImage}
      >
        <PlantlyImage imageUri={imageUri} />
      </TouchableOpacity>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="E.g. Casper the Cactus"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Watering Frequency (every x days)</Text>
      <TextInput
        value={days}
        onChangeText={setDays}
        style={styles.input}
        placeholder="E.g. 6"
        keyboardType="number-pad"
      />
      <ButtonX title="Add plant" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  input: {
    borderWidth: 2,
    borderColor: theme.colors.lightGrey,
    padding: 12,
    borderRadius: 6,
    marginBottom: 24,
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
})
