import { StatusBar } from 'expo-status-bar'
import './gesture-handler'
import { Routes } from './routes'
import { UserContextProvider } from './src/contexts/UserContext'

export default function App() {
  return (
    <UserContextProvider>
      <Routes />
      <StatusBar style="auto" />
    </UserContextProvider>
  )
}
