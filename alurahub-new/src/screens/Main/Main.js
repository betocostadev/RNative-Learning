import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native'
import styles from './styles'
import { getUserByLogin, getUsers } from '../../services/users'

export default function Main({ navigation }) {
  const [userName, setUserName] = useState('')
  const [user, setUser] = useState({})

  const fetchUsers = async () => {
    try {
      const result = await getUsers()
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  const getUserWithLogin = async () => {
    if (!userName?.length) return

    try {
      const result = await getUserByLogin(userName)

      if (result.length) {
        setUser(result[0])
        console.log('selected user: ')
        console.log(user)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        <>
          <View style={styles.fundo} />
          <View style={styles.imagemArea}>
            <Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/54721131?v=4',
              }}
              style={styles.imagem}
            />
          </View>
          <Text style={styles.textoNome}>Nome do usuario</Text>
          <Text style={styles.textoEmail}>Email do usuario</Text>
          <View style={styles.seguidoresArea}>
            <View style={styles.seguidores}>
              <Text style={styles.seguidoresNumero}>30</Text>
              <Text style={styles.seguidoresTexto}>Seguidores</Text>
            </View>
            <View style={styles.seguidores}>
              <Text style={styles.seguidoresNumero}>40</Text>
              <Text style={styles.seguidoresTexto}>Seguindo</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Repositories')}>
            <Text style={styles.repositorios}>Ver os repositórios</Text>
          </TouchableOpacity>
        </>

        <TextInput
          placeholder="Busque por um usuário"
          autoCapitalize="none"
          style={styles.entrada}
          value={userName}
          onChangeText={setUserName}
        />

        <TouchableOpacity style={styles.botao} onPress={getUserWithLogin}>
          <Text style={styles.textoBotao}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
