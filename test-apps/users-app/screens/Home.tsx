import { Pressable, SafeAreaView, Text, View } from 'react-native'
import Users from '../components/Home/Users'
import { styles } from './HomeStyles'
import { useCountry } from '../hooks/useCountry'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamlist } from '../routes/stack.routes'
import { User } from '../types/users'

type HomeScreenProps = {
  navigation: StackNavigationProp<RootStackParamlist, 'Home'>
}

export default function Home({ navigation }: HomeScreenProps) {
  const { selectedCountry, setSelectedCountry } = useCountry()

  const handleCountrySelect = (country: string) => {
    if (country === selectedCountry) {
      setSelectedCountry('All')
      return
    }
    setSelectedCountry(country)
  }

  const handleOptionStyle = (country: string) => {
    if (selectedCountry === country) {
      return [styles.countryOption, styles.selectedOption]
    }
    return styles.countryOption
  }

  const goToUserScreen = (user: User) => {
    navigation.navigate('User', user)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Random Users</Text>
        <View>
          <Text style={styles.filterText}>Filter by country</Text>
          <View style={styles.optionsContainer}>
            <Pressable
              style={() => handleOptionStyle('All')}
              onPress={() => handleCountrySelect('All')}
            >
              <Text style={styles.countryOptionText}>All</Text>
            </Pressable>
            <Pressable
              style={() => handleOptionStyle('au')}
              onPress={() => handleCountrySelect('au')}
            >
              <Text style={styles.countryOptionText}>🇦🇺</Text>
            </Pressable>
            <Pressable
              style={() => handleOptionStyle('br')}
              onPress={() => handleCountrySelect('br')}
            >
              <Text style={styles.countryOptionText}>🇧🇷</Text>
            </Pressable>
            <Pressable
              style={() => handleOptionStyle('ca')}
              onPress={() => handleCountrySelect('ca')}
            >
              <Text>🇨🇦</Text>
            </Pressable>
            <Pressable
              style={() => handleOptionStyle('fi')}
              onPress={() => handleCountrySelect('fi')}
            >
              <Text>🇫🇮</Text>
            </Pressable>
            <Pressable
              style={() => handleOptionStyle('us')}
              onPress={() => handleCountrySelect('us')}
            >
              <Text>🇺🇸</Text>
            </Pressable>
          </View>
        </View>
        <Users goToUser={goToUserScreen} />
      </View>
    </SafeAreaView>
  )
}
