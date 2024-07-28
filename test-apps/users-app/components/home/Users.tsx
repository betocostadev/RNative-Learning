import React, { useCallback, useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Image,
  RefreshControl,
  Pressable,
} from 'react-native'
import { IUsers, User } from '../../types/users'
import { styles } from './UsersStyles'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useCountry } from '../../hooks/useCountry'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useUser } from '../../hooks/useUser'

type UsersProps = {
  goToUser: (user: User) => void
}

const UserCard = ({
  user,
  goToUser,
}: {
  user: User
  goToUser: (user: User) => void
}) => {
  const { selectedUser, setSelectedUser } = useUser()

  const handleNavigation = () => {
    if (selectedUser) {
      goToUser(user)
    }
    return
  }

  const setUser = () => {
    setSelectedUser(user)
  }

  useEffect(() => {
    handleNavigation()
  }, [selectedUser, setSelectedUser])
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={setUser}>
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
      </TouchableOpacity>
    </View>
  )
}

const Users = ({ goToUser }: UsersProps) => {
  const [users, setUsers] = useState<[] | User[]>([])
  const [refreshing, setRefreshing] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const { selectedCountry } = useCountry()

  const handleLink = () => {
    console.log('About link pressed')
    return
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)
    setTimeout(() => {
      setRefreshing(false)
    }, 750)
  }, [])

  const loadUsers = async () => {
    if (isLoading) return

    // Add this loading state to avoid the problem to fetch users multiple times
    // due to setTimout in onRefresh
    setIsLoading(true)
    const baseUrl = 'https://randomuser.me/api/?results=10'
    const url =
      selectedCountry === 'All' ? baseUrl : `${baseUrl}&nat=${selectedCountry}`
    try {
      const response = await fetch(url, {
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
      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadUsers()
  }, [selectedCountry, refreshing])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={users}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => <UserCard user={item} goToUser={goToUser} />}
        keyExtractor={(item) => item.login.uuid}
        ListFooterComponent={
          <View style={styles.listFooter}>
            <Pressable onPress={handleLink}>
              <Text style={{ fontSize: 20, color: '#2470fd' }}>About</Text>
            </Pressable>
          </View>
        }
      />
    </SafeAreaView>
  )
}

export default Users
