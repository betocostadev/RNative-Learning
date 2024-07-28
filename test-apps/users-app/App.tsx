import { StatusBar } from 'expo-status-bar'
import { CountryProvider } from './providers/CountryProvider'

import './gesture-handler'
import Routes from './routes'
import { UserProvider } from './providers/UserProvider'

export default function App() {
  return (
    <CountryProvider>
      <UserProvider>
        <Routes />
        <StatusBar style="auto" />
      </UserProvider>
    </CountryProvider>
  )
}
