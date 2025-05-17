import { StatusBar } from 'expo-status-bar'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { theme } from '@/styles/theme'
import { usePlantStore } from '@/store/plantsStore'
import { PlantCard } from '@/components/PlantCard'
import { ButtonX } from '@/components/ButtonX'
import { useRouter } from 'expo-router'

export default function App() {
  const router = useRouter()
  const plants = usePlantStore((state) => state.plants)

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <ButtonX
          title="Add your first plant"
          onPress={() => {
            router.navigate('/new')
          }}
        />
      }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
  },
  contentContainer: {
    padding: 12,
  },
})
