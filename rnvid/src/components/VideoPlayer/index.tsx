import { Text, View } from 'react-native'
import { VideoPlayerProps } from './props'
import { styles } from './styles'

export default function VideoPlayer({
  video,
  onShare,
  onSave,
  onDelete,
}: VideoPlayerProps) {
  return (
    <View>
      <Text>Video Player</Text>
    </View>
  )
}
