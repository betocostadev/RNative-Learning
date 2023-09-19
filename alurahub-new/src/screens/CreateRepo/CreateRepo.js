import React, { useState } from 'react'
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native'
import styles from './styles'

export default function CreateRepo({ route, navigation }) {
  const [nome, setNome] = useState('')
  const [data, setData] = useState('')

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome do repositório"
        autoCapitalize="none"
        style={styles.entrada}
      />
      <TextInput
        placeholder="Data de criação"
        autoCapitalize="none"
        style={styles.entrada}
      />
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textoBotao}>Criar</Text>
      </TouchableOpacity>
    </View>
  )
}
