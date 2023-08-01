import { Image } from 'react-native'
import CustomText from '../CustomText'
import top from '../../../assets/top.png'
import styles from './basketStyles'

const BasketTop = ({ topData }) => {
  return (
    <>
      <Image style={styles.top} source={top} />
      <CustomText style={styles.title}>{topData.title}</CustomText>
    </>
  )
}

export default BasketTop
