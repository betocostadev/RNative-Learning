import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import Logo from '../../../assets/logo.png'
import Divider from '../Divider'
import { CAR_ASSETS_BASE_URL } from '../../constants/car'
import BuyButton from '../BuyButton'
import { AntDesign } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { handleNextItem, handlePreviousItem, loadCarData } from './actions'
import { CarModel } from './props'
import Spinner from '../Spinner'

export default function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null)
  const [loading, setLoading] = useState(false)

  const nextCar = async () => {
    if (carData) {
      await handleNextItem({ id: carData.id, setCarData, setLoading })
    }
  }

  const previousCar = async () => {
    if (carData) {
      await handlePreviousItem({ id: carData.id, setCarData, setLoading })
    }
  }

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image source={Logo} style={styles.imageLogo} />
    </View>
  )

  const renderCarDetails = () => (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carModel}>{carData?.carName ?? 'Model'}</Text>
    </View>
  )

  const renderCarImage = () => (
    <Image
      style={styles.carImage}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}${carData?.id ?? '1'}.png`,
      }}
    />
  )

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <TouchableOpacity style={styles.smallButton} onPress={previousCar}>
        <AntDesign
          name="left"
          size={24}
          color="white"
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
      <Text style={styles.priceLabel}>
        {carData?.price ?? 'Price not loaded'}
      </Text>
      <TouchableOpacity style={styles.smallButton} onPress={nextCar}>
        <AntDesign
          name="right"
          size={24}
          color="white"
          style={styles.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  )

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      await loadCarData({ id: 1, setCarData, setLoading })
      setLoading(false)
    })()
  }, [])

  if (loading) {
    return <Spinner />
  }

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
