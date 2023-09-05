import {useEffect, useState} from 'react'
import {StyleSheet, View} from 'react-native'
import Star from './Star'

type Props = {
  starsQty: number
  isEditable: boolean
  isBig: boolean
}
const Stars = ({starsQty, isEditable, isBig}: Props) => {
  const [quantity, setQuantity] = useState(0)

  useEffect(() => {
    setQuantity(starsQty)
  }, [])

  return (
    <View style={styles.stars}>
      {['*', '*', '*', '*', '*'].map((_str, idx) => (
        <Star
          key={`touch-start-${idx}`}
          onPress={() => setQuantity(idx + 1)}
          isFilled={idx < quantity}
          isBig={isBig}
          isDisabled={!isEditable}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
  },
})

export default Stars
