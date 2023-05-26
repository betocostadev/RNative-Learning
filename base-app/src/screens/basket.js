import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import top from '../../assets/top.png'
import logo from '../../assets/logo.png'
import CustomText from '../components/CustomText'

const screenWidth = Dimensions.get('screen').width

const Basket = () => {
  return (
    <View>
      <CustomText style={styles.title}>Basket details</CustomText>
      <Image style={styles.top} source={top} />
      <View style={styles.basket}>
        <CustomText style={styles.basketName}>Vegetables Basket</CustomText>
        <View style={styles.farm}>
          <Image style={styles.farmLogo} source={logo} />
          <CustomText style={styles.farmName}>Jenny Jack Farm</CustomText>
        </View>
        <CustomText style={styles.description}>
          Some whatever mixed with much more whatever in a way that whatever.
          Get it now in this super promotion!
        </CustomText>
        <CustomText style={styles.price}>CAD$ 9,85</CustomText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  top: {
    resizeMode: 'cover',
    width: '100%',
    height: (578 / 768) * screenWidth,
  },
  title: {
    width: '100%',
    paddingTop: 4,
    color: 'white',
    position: 'absolute',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 26,
    zIndex: 2,
  },
  basket: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  basketName: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  farm: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  farmLogo: {
    width: 48,
    height: 48,
  },
  farmName: {
    alignSelf: 'center',
    marginLeft: 12,
    fontSize: 16,
    lineHeight: 26,
  },
  description: {
    fontWeight: 'light',
    color: '#A3A3A3',
    fontSize: 18,
    lineHeight: 26,
  },
  price: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 42,
    marginTop: 8,
  },
})

export default Basket
