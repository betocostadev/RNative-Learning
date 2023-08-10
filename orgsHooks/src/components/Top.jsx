import { Image, StyleSheet, Text, View } from "react-native"
import logo from '../assets/logo.png'
import { getTopData } from "../services/gen-data"
import { useEffect, useState } from "react"

const Top = () => {
  const [welcomeText, setWelcomeText ] = useState('')
  const [subheading, setSubheading ] = useState('')

  const getData = async () => {
    try {
      const data = getTopData()
      if (data) {
        setWelcomeText(data.welcome)
        setSubheading(data.subheading)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <View style={styles.top}>
      <Image style={styles.image} source={logo} />
    <Text style={styles.welcome}>{ welcomeText }</Text>
    <Text style={styles.subheading}>{ subheading }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#f6f6f6',
    padding: 16
  },
  image: {
    width: 70,
    height: 28
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold'
  },
  subheading: {
    fontSize: 16,
    lineHeight: 26
  }
})

export default Top