import { usePlantStore } from '@/store/plantsStore'
import { theme } from '@/styles/theme'
import { useLocalSearchParams, useNavigation, useRouter } from 'expo-router'
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native'
import { differenceInCalendarDays, format } from 'date-fns'
import { ButtonX } from '@/components/ButtonX'
import { useEffect } from 'react'
import PlantlyImage from '@/components/PlantlyImage'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

const fullDateFormat = 'LLL d yyyy, h:mm aaa'

export default function PlantScreen() {
  const router = useRouter()
  const waterPlant = usePlantStore((store) => store.waterPlant)
  const removePlant = usePlantStore((store) => store.removePlant)
  const params = useLocalSearchParams()
  const navigation = useNavigation()
  const plantId = params.plantId
  const plant = usePlantStore((state) =>
    state.plants.find((plant) => String(plant.id) === plantId)
  )

  useEffect(() => {
    if (plant) {
      navigation.setOptions({ title: plant?.name })
    }
  }, [plant?.name, navigation])

  const handleWaterPlant = () => {
    if (typeof plantId === 'string') {
      waterPlant(plantId)
    }
  }

  const handleDeletePlant = () => {
    if (!plant?.id) {
      return
    }

    Alert.alert(
      `Are you sure you want to delete ${plant?.name}?`,
      'It will be gone for good',
      [
        {
          text: 'Yes',
          onPress: () => {
            removePlant(plant.id)
            router.navigate('/')
          },
          style: 'destructive',
        },
        { text: 'Cancel', style: 'cancel' },
      ]
    )
  }

  if (!plant) {
    return (
      <View style={styles.notFoundContainer}>
        <View style={styles.notFoundView}>
          <Text style={styles.notFoundText}>
            Oops, plant not found. Maybe this plant died.
          </Text>
          <MaterialCommunityIcons name="emoticon-dead" size={54} color="red" />
        </View>
      </View>
    )
  }
  return (
    <View style={styles.detailsContainer}>
      <View style={{ alignItems: 'center' }}>
        <PlantlyImage imageUri={plant.imageUri} />
        <View style={styles.spacer} />
        <Text style={styles.key}>Water me every</Text>
        <Text style={styles.value}>{plant.wateringFrequencyDays} days</Text>
        <Text style={styles.key}>Last watered at</Text>
        <Text style={styles.value}>
          {plant.lastWateredAtTimestamp
            ? `${format(plant.lastWateredAtTimestamp, fullDateFormat)}`
            : 'Never 😟'}
        </Text>
        <Text style={styles.key}>Days since last watered</Text>
        <Text style={styles.value}>
          {plant.lastWateredAtTimestamp
            ? differenceInCalendarDays(Date.now(), plant.lastWateredAtTimestamp)
            : 'N/A'}
        </Text>
      </View>
      <ButtonX title="Water me!" onPress={handleWaterPlant} />
      <Pressable style={styles.deleteButton} onPress={handleDeletePlant}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  notFoundContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
  },
  notFoundView: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: 18,
  },
  notFoundText: {
    fontSize: 24,
  },
  detailsContainer: {
    padding: 12,
    backgroundColor: theme.colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  key: {
    marginRight: 8,
    fontSize: 16,
    color: theme.colors.black,
    textAlign: 'center',
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: theme.colors.green,
  },
  deleteButton: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: theme.colors.grey,
    fontWeight: 'bold',
  },
  spacer: {
    height: 18,
  },
})
