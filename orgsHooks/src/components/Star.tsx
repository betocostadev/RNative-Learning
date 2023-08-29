import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import star from '../assets/star.png'
import grayStar from '../assets/starGray.png'

type Props = {
  isDisabled: boolean
  isFilled: boolean
  isBig: boolean
  onPress?: ((event: GestureResponderEvent) => void) | undefined
}

const Star = ({onPress, isDisabled = true, isFilled, isBig = false}: Props) => {
  const styles = stylesFunc(isBig)
  const getImage = () => (isFilled ? star : grayStar)

  return (
    <TouchableOpacity onPress={onPress} disabled={isDisabled}>
      <Image source={getImage()} style={styles.star} />
    </TouchableOpacity>
  )
}

const stylesFunc = (isBig: boolean) =>
  StyleSheet.create({
    star: {
      width: isBig ? 36 : 18,
      height: isBig ? 36 : 18,
      marginRight: 2,
      marginTop: 2,
    },
  })

export default Star
