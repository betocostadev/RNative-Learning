import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getFromStorage(key: string) {
  try {
    const data = await AsyncStorage.getItem(key)
    return data ? JSON.parse(data) : null
  } catch (error) {
    console.log(error)
    return null
  }
}

export async function setInStorage(key: string, data: object) {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data))
  } catch (error) {
    console.log(error)
    return null
  }
}
