import { Image, Text, View } from 'react-native'
import { styles } from './style'
import Logo from '../../../assets/logo.png'
import Divider from '../Divider'
import { CAR_ASSETS_BASE_URL } from '../../constants/car'

export default function CardView() {
  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image source={Logo} style={styles.imageLogo} />
    </View>
  )

  const renderCarDetails = () => (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carModel}>MODEL</Text>
    </View>
  )

  const renderCarImage = () => (
    <Image
      style={styles.carImage}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}2.png`,
      }}
    />
  )

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <Divider />
    </View>
  )
}
