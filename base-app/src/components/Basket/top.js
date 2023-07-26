import { Image } from 'react-native'
import CustomText from '../CustomText'
import top from '../../../assets/top.png'
import styles from './basketStyles'

const BasketTop = () => {
  return (
    <>
      <Image style={styles.top} source={top} />
      <CustomText style={styles.title}>Basket details</CustomText>
    </>
  )
}

export default BasketTop
