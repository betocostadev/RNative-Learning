import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import Logo from '../../../assets/logo.png'
import Divider from '../Divider'
import { CAR_ASSETS_BASE_URL } from '../../constants/car'
import BuyButton from '../BuyButton'
import { AntDesign } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { handleNextItem, handlePreviousItem, loadCarData } from './actions'
import { CarModel } from './props'

export default function CardView() {
  const [carData, setCarData] = useState<CarModel | undefined>(undefined)

  const nextCar = async () => {
    const car = await handleNextItem()
    if (car) {
      setCarData(car)
    }
  }

  const previousCar = async () => {
    const car = await handlePreviousItem()
    if (car) {
      setCarData(car)
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
    const getCarData = async () => {
      const data = await loadCarData()
      if (data) {
        setCarData(data)
      }
    }
    getCarData()
  }, [])

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
