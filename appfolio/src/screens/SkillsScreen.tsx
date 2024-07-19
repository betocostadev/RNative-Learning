import { Text, View } from 'react-native'
import ProfilePicture from '../components/Shared/ProfilePicture'
import { styles } from './SkillScreenStyles'
import SkillTree from '../components/Skills/SkillTree'

const skills = [
  { id: '1', label: 'JavaScript', level: 5 },
  { id: '5', label: 'React', level: 4 },
  { id: '2', label: 'TypeScript', level: 3 },
  { id: '6', label: 'React Native', level: 2 },
  { id: '3', label: 'Node', level: 2 },
  { id: '4', label: 'Python', level: 1 },
]

export default function SkillsScreen() {
  return (
    <View style={styles.container}>
      <ProfilePicture />
      <Text style={styles.title}>My Skills</Text>
      <View style={styles.skillTreeContainer}>
        <SkillTree skills={skills} />
      </View>
    </View>
  )
}
