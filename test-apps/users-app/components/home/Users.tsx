import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native'
import { IUsers, User } from '../../types/users'

type ItemProps = { title: string }

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
)

const Users = () => {
  const [users, setUsers] = useState<[] | User[]>([])

  const loadUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=2', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!response.ok) {
        throw new Error('Failed to fetch users')
      }

      const data: IUsers = await response.json()
      setUsers(data.results)

      console.log('Users: ')
      console.log(users)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={({ item }) => <Item title={item.name.first} />}
        keyExtractor={(item) => item.id.value}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
})

export default Users
