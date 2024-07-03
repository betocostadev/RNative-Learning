import { Pressable, SafeAreaView, Text, View } from 'react-native'
import Users from '../components/Home/Users'
import { styles } from './HomeStyles'
import { useState } from 'react'

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState('All')

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
        <Users country={selectedCountry} />
      </View>
    </SafeAreaView>
  )
}
