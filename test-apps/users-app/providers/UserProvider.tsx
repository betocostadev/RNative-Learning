import { useState } from 'react'
import { UserContext } from '../contexts/UserContext'
import { User } from '../types/users'

interface UserProviderProps {
  children: React.ReactNode
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [selectedUser, setSelectedUser] = useState<User | undefined>()
  return (
    <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  )
}
