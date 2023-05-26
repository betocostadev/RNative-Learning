import { StyleSheet, Text } from 'react-native'

const CustomText = ({ children, style }) => {
  let defStyle = styles.text
  if (style?.fontWeight === 'bold') defStyle = styles.boldText
  else if (style?.fontWeight === 'light') defStyle = styles.lightText

  return <Text style={[style, defStyle]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat',
  },
  boldText: {
    fontFamily: 'MontserratBold',
    fontWeight: 'regular',
  },
  lightText: {
    fontFamily: 'MontserratLight',
  },
})

export default CustomText
