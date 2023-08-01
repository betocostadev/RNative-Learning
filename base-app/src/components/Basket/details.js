import { Image, View, Text, TouchableOpacity, Pressable } from 'react-native'
import CustomText from '../CustomText'
import styles from './basketStyles'

const BasketDetails = ({ details }) => {
  return (
    <>
      <CustomText style={styles.basketName}>{details.name}</CustomText>
      <View style={styles.farm}>
        <Image style={styles.farmLogo} source={details.logo} />
        <CustomText style={styles.farmName}>{details.farmName}</CustomText>
      </View>
      <CustomText style={styles.description}>{details.description}</CustomText>
      <CustomText style={styles.price}>{details.price}</CustomText>
      <Pressable style={styles.button} onPress={() => console.log('buy now')}>
        <Text style={styles.buttonText}>{details.button}</Text>
      </Pressable>
    </>
  )
}

export default BasketDetails
