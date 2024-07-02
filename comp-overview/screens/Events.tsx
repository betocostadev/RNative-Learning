import { Alert, StyleSheet, Text, View } from 'react-native'

export default function Events() {
  const handleTitlePress = () => {
    return Alert.alert('Why did you press?')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} onPress={handleTitlePress}>
        Events - Press me!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
})
