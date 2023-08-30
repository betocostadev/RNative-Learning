import {StyleSheet, Text} from 'react-native'

const CustomText = ({children, style}) => {
  const defStyle =
    style?.fontWeight === 'bold'
      ? styles.boldText
      : style?.fontWeight === 'light'
      ? styles.lightText
      : styles.text

  return <Text style={[style, defStyle]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat',
  },
  boldText: {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal',
  },
  lightText: {
    fontFamily: 'MontserratLight',
  },
})

export default CustomText
