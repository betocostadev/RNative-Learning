import {Image, StyleSheet, Text, View} from 'react-native'
import logo from '../../assets/logo.png'
import useTexts from '../../hooks/useTexts'
import CustomText from '../CustomText'
import {TextsType} from '../../types/producers'

const TopHome = ({bestProducers}: {bestProducers: boolean}) => {
  const texts: TextsType = useTexts()

  return (
    <View style={styles.top}>
      <Image style={styles.image} source={logo} />
      <CustomText style={styles.welcome}>
        {bestProducers ? '' : texts.welcome}
      </CustomText>
      <Text style={styles.subheading}>
        {bestProducers ? texts.legendBestProducers : texts.legend}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  buy: {
    backgroundColor: '#EAF5F3',
    padding: 16,
  },
  buyMessage: {
    fontSize: 16,
    lineHeight: 26,
    color: '#464646',
  },
  image: {
    width: 70,
    height: 28,
  },
  welcome: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 16,
    lineHeight: 26,
    color: '#A3A3A3',
  },
})

export default TopHome
