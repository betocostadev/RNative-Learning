import React, { useEffect, useState } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function Repositories({ route, navigation }) {
  const [repo, setRepo] = useState([])

  return (
    <View style={styles.container}>
      <Text style={styles.repositoriosTexto}>
        {repo.length} repositórios criados
      </Text>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('CreateRepository')}
      >
        <Text style={styles.textoBotao}>Adicionar novo repositório</Text>
      </TouchableOpacity>
    </View>
  )
}
