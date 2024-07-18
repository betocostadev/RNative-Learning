import { Text, View } from 'react-native'
import ProfilePicture from '../components/Shared/ProfilePicture'
import { styles } from './SkillScreenStyles'
import AntDesign from '@expo/vector-icons/AntDesign'

const skills = [
  { id: '1', label: 'JavaScript', level: 5 },
  { id: '5', label: 'React', level: 4 },
  { id: '2', label: 'TypeScript', level: 3 },
  { id: '6', label: 'React Native', level: 2 },
  { id: '3', label: 'Node', level: 2 },
  { id: '4', label: 'Python', level: 1 },
]

function createBooleanArray(input: number): boolean[] {
  const arraySize = 5
  const resultArray = new Array(arraySize).fill(false)

  for (let i = 0; i < input && i < arraySize; i++) {
    resultArray[i] = true
  }

  return resultArray
}

export default function SkillsScreen() {
  const renderStars = (level: number) => {
    const arr = createBooleanArray(level)

    return (
      <View style={{ flexDirection: 'row' }}>
        {arr.map((v) => (
          <AntDesign
            key={Math.floor(Math.random() * 10_000)}
            name={v ? 'star' : 'staro'}
            color={v ? '#bcb916' : '#262626'}
            size={24}
          />
        ))}
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ProfilePicture />
      <Text style={styles.title}>My Skills</Text>
      <View>
        {skills.map((sk) => (
          <View
            key={sk.id}
            style={{
              flexDirection: 'row',
              alignItems: 'stretch',
              justifyContent: 'space-around',
            }}
          >
            <Text>{sk.label}</Text>
            {renderStars(sk.level)}
          </View>
        ))}
      </View>
    </View>
  )
}
