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

  // const RenderStars = () => {
  //   const starsList = []
  //   for (let i = 0; i < 5; i++) {
  //     starsList.push(
  //       <Star
  //         key={`touch-start-${i}`}
  //         onPress={setQuantity(i + 1)}
  //         isFilled={i < quantity}
  //         isBig={isBig}
  //         isDisabled={!isEditable}
  //       />,
  //     )
  //   }
  //   return starsList
  // }

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
