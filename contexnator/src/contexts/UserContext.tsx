import { createContext, useState } from 'react'

//  Types
export interface UserContextProps {
  contextName: string
  saveContextName: (user: string) => void
}

// Context
export const UserContext = createContext<UserContextProps | undefined>(
  undefined
)

// Provider
export function UserContextProvider({ children }: any) {
  const [contextName, setContextName] = useState<string>('')
  const contextValues: UserContextProps = { contextName, saveContextName }

  function saveContextName(user: string) {
    if (user !== '') {
      setContextName(user)
    }
  }

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  )
}
