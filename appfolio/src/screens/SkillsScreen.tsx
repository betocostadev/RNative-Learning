import { Text, View } from 'react-native'
import ProfilePicture from '../components/Shared/ProfilePicture'
import { styles } from './SkillScreenStyles'

export default function SkillsScreen() {
  return (
    <View style={styles.container}>
      <ProfilePicture />
      <Text style={styles.title}>My Skills</Text>
    </View>
  )
}
