import { Image, View } from 'react-native'
import CustomText from '../CustomText'
import styles from './basketStyles'
import logo from '../../../assets/logo.png'

const BasketDetails = () => {
  return (
    <>
      <CustomText style={styles.basketName}>Vegetables Basket</CustomText>
      <View style={styles.farm}>
        <Image style={styles.farmLogo} source={logo} />
        <CustomText style={styles.farmName}>Jenny Jack Farm</CustomText>
      </View>
      <CustomText style={styles.description}>
        Some whatever mixed with much more whatever in a way that whatever. Get
        it now in this super promotion!
      </CustomText>
      <CustomText style={styles.price}>CAD$ 9,85</CustomText>
    </>
  )
}

export default BasketDetails
