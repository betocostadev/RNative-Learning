import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, FlatList, Text, Image } from 'react-native'
import { IUsers, User } from '../../types/users'
import { styles } from './UsersStyles'
import Ionicons from '@expo/vector-icons/Ionicons'

const UserCard = ({ user }: { user: User }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Image
        style={[styles.cardAvatar]}
        source={{ uri: user.picture.medium }}
      />
    </View>
    <View style={styles.cardBody}>
      <View style={styles.nameContainer}>
        <Text style={styles.greeting}>Hi, my name is</Text>
        <Text
          style={styles.title}
        >{`${user.name.first} ${user.name.last}`}</Text>
      </View>
      <View style={styles.cardInfo}>
        <Ionicons name="phone-portrait" size={28} color="gray" />
        <Ionicons name="mail" size={28} color="gray" />
        <Ionicons name="locate" size={28} color="gray" />
      </View>
    </View>
  </View>
)

const Users = () => {
  const [users, setUsers] = useState<[] | User[]>([])

  const loadUsers = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=4', {
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
        renderItem={({ item }) => <UserCard user={item} />}
        keyExtractor={(item) => item.id.value}
      />
    </SafeAreaView>
  )
}

export default Users
