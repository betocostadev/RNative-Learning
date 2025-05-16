import { Image } from 'expo-image'
import { StyleSheet, useWindowDimensions } from 'react-native'
import image from '@/assets/plantly.png'

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj['

export default function PlantlyImage({
  size,
  imageUri,
}: {
  size?: number
  imageUri?: string
}) {
  const { width } = useWindowDimensions()
  const imageSize = size || Math.min(width / 1.5, 400)
  return (
    <Image
      style={[styles.image, { width: imageSize, height: imageSize }]}
      source={imageUri ? { uri: imageUri } : image}
      placeholder={{ blurhash }}
      contentFit="fill"
      transition={1000}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'transparent',
    borderRadius: 6,
  },
})
