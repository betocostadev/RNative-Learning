import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import Logo from '../../../assets/logo.png'
import Divider from '../Divider'
import { CAR_ASSETS_BASE_URL } from '../../constants/car'
import BuyButton from '../BuyButton'
import { AntDesign } from '@expo/vector-icons'

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

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <TouchableOpacity
        style={styles.smallButton}
        onPress={() => console.log('Previous')}
      >
        <AntDesign
          name="left"
          size={24}
          color="white"
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
      <Text style={styles.priceLabel}>Value</Text>
      <TouchableOpacity
        style={styles.smallButton}
        onPress={() => console.log('Next')}
      >
        <AntDesign
          name="right"
          size={24}
          color="white"
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  )
}
