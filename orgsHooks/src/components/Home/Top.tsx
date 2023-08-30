import {Image, StyleSheet, Text, View} from 'react-native'
import logo from '../../assets/logo.png'
import useTexts from '../../hooks/useTexts'
import CustomText from '../CustomText'

const TopHome = ({bestProducers}) => {
  const {welcome, legend, legendBestProducers} = useTexts()

  return (
    <View style={styles.top}>
      <Image style={styles.image} source={logo} />
      <CustomText style={styles.welcome}>
        {bestProducers ? '' : welcome}
      </CustomText>
      <Text style={styles.subheading}>
        {bestProducers ? legendBestProducers : legend}
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

// const estilos = StyleSheet.create({
//   topo: {
//     backgroundColor: '#F6F6F6',
//     padding: 16,
//   },
//   compra: {
//     backgroundColor: '#EAF5F3',
//     padding: 16,
//   },
//   compraMensagem: {
//     fontSize: 16,
//     lineHeight: 26,
//     color: '#464646',
//   },
//   imagem: {
//     width: 70,
//     height: 28,
//   },
//   boasVindas: {
//     marginTop: 24,
//     fontSize: 26,
//     lineHeight: 42,
//     fontWeight: 'bold',
//     color: '#464646',
//   },
//   legenda: {
//     fontSize: 16,
//     lineHeight: 26,
//     color: '#A3A3A3',
//   },
// })
