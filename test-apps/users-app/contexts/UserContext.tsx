import { createContext } from 'react'
import { User } from '../types/users'

interface IUserContext {
  selectedUser: User | undefined
  setSelectedUser: (user: User) => void
}

export const UserContext = createContext<IUserContext | undefined>(undefined)
