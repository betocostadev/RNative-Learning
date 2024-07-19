import React from 'react'
import { Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign'
import { styles } from './SkillTreeStyles'

interface Skill {
  id: string
  label: string
  level: number
}

interface SkillTreeProps {
  skills: Skill[]
}

function createBooleanArray(input: number): boolean[] {
  const arraySize = 5
  const resultArray = new Array(arraySize).fill(false)

  for (let i = 0; i < input && i < arraySize; i++) {
    resultArray[i] = true
  }

  return resultArray
}

export default function SkillTree({ skills }: SkillTreeProps) {
  const renderStars = (level: number) => {
    const arr = createBooleanArray(level)

    return (
      <View style={{ flexDirection: 'row' }}>
        {arr.map((v) => (
          <AntDesign
            key={Math.floor(Math.random() * 10_000)}
            name={v ? 'star' : 'staro'}
            color={v ? '#d2d03f' : '#5a5959'}
            size={24}
          />
        ))}
      </View>
    )
  }

  if (!skills || !skills.length) {
    return (
      <View style={{ flex: 1, marginVertical: 10 }}>
        <Text style={{ fontSize: 20 }}>Skills not provided</Text>
      </View>
    )
  }

  return (
    <View>
      {skills.map((sk) => (
        <View key={sk.id} style={styles.container}>
          <Text style={styles.label}>{sk.label}</Text>
          {renderStars(sk.level)}
        </View>
      ))}
    </View>
  )
}
