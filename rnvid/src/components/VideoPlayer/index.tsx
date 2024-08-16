import { Button, SafeAreaView, TouchableOpacity, View } from 'react-native'
import { Audio, Video } from 'expo-av'
import Ionicons from '@expo/vector-icons/Ionicons'

import { VideoPlayerProps } from './props'
import { styles } from './styles'

export default function VideoPlayer({
  video,
  onShare,
  onSave,
  onDelete,
}: VideoPlayerProps) {
  return (
    <SafeAreaView style={styles.videoContainer}>
      <Video
        style={styles.video}
        source={{ uri: video.uri }}
        useNativeControls
        isLooping
      />
      <View style={styles.menuButtons}>
        <TouchableOpacity onPress={onShare}>
          <Ionicons name="share-outline" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSave}>
          <Ionicons name="save-outline" size={32} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Ionicons name="trash-bin-outline" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
